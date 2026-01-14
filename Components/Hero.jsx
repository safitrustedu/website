import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/main.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-gray-900/90" />
      </div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >


          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/10">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-white font-medium">Since 1999</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
            Safi Benevolent Trust
          </h1>

          <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
            Changing Lives Through Education
          </p>

          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Serving Neelam and Shah Rasool Colonies in Karachi with free, quality education and comprehensive community support
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-elegant group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-secondary text-primary-dark hover:bg-secondary-light font-semibold px-8 py-6 text-lg shadow-elegant"
              >
                Donate Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;