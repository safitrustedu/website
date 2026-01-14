import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/safitrustlogo.jpg" alt="Safi Benevolent Trust" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-white text-lg">Safi Benevolent Trust</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering communities through education and development programs since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/tgs" className="text-sm text-gray-500 hover:text-secondary transition-colors">The Garage School</Link></li>
              <li><Link to="/digital-hub" className="text-sm text-gray-500 hover:text-secondary transition-colors">Digital Hub</Link></li>
              <li><Link to="/impact" className="text-sm text-gray-500 hover:text-secondary transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-sm text-gray-500 hover:text-secondary transition-colors">Donate</Link></li>
              <li><Link to="/donate" className="text-sm text-gray-500 hover:text-secondary transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-sm text-gray-500 hover:text-secondary transition-colors">Zakat</Link></li>
              <li><Link to="/donate" className="text-sm text-gray-500 hover:text-secondary transition-colors">Sadqa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-sm">Neelam Colony, Phase 5, DHA, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm">info@safitrust.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm">+92 (21) 1234-5678</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2026 Safi Benevolent Trust. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/groups/thegarageschool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/thegarageschool_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/TheGarageSchool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors">
              {/* Using Twitter icon for X, or standard X text if preferred. For now keeping Twitter icon but linking to X */}
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@thegarageschool8399" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/thegarageschool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;