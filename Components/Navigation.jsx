import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { Button } from '../ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Projects',
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'The Garage School', path: '/tgs' },
        { name: 'Digital Empowerment Hub', path: '/digital-hub' }
      ]
    },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img src="/safitrustlogo.jpg" alt="Safi Benevolent Trust" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold font-heading text-xl text-primary">Safi Benevolent Trust</div>
              <div className="text-xs text-muted-foreground">Empowering Communities</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-primary hover:text-secondary font-medium transition-colors duration-200"
                      onMouseEnter={() => setIsProjectsOpen(true)}
                      onMouseLeave={() => setIsProjectsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elegant-lg overflow-hidden"
                          onMouseEnter={() => setIsProjectsOpen(true)}
                          onMouseLeave={() => setIsProjectsOpen(false)}
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-3 text-gray-700 hover:bg-secondary/10 hover:text-secondary-dark transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors duration-200 ${location.pathname === link.path
                      ? 'text-secondary'
                      : 'text-primary hover:text-secondary'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/donate">
              <Button className="bg-secondary text-primary-dark hover:bg-secondary-light font-semibold px-6 shadow-lg">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white rounded-b-2xl shadow-elegant"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between text-gray-700 font-medium py-2"
                          onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isProjectsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 mt-2"
                            >
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="block text-muted-foreground hover:text-secondary py-2"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block font-medium py-2 ${location.pathname === link.path
                          ? 'text-secondary'
                          : 'text-primary'
                          }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link to="/donate" className="block">
                  <Button className="w-full bg-secondary text-primary-dark hover:bg-secondary-light font-semibold">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;