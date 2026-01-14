import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FounderMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Founder's Message
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-elegant-lg p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-8 left-8 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center opacity-20"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          <div className="relative z-10">
            {/* Founder Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
              >
                SM
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Mrs. Shabina Mustafa</h3>
                <p className="text-teal-600 font-medium">Founder & Chairperson</p>
                <p className="text-gray-600 text-sm mt-1">Safi Benevolent Trust</p>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl italic">
                "Safi Benevolent Trust was established in 1999 as a tribute to the memory of my husband, 
                <span className="font-semibold text-teal-700"> Flt. Lt. Syed Safi Mustafa Shaheed</span>, 
                who served our nation with distinction and honor."
              </p>
              
              <p className="text-base md:text-lg">
                Our institutional mission centers on delivering <span className="font-semibold text-teal-700">comprehensive educational excellence</span> to 
                underserved communities, ensuring that socioeconomic barriers do not impede access to quality learning. 
                Education serves as the cornerstone for sustainable development, fostering intellectual growth and creating 
                pathways to economic empowerment.
              </p>
              
              <p className="text-base md:text-lg">
                Through our flagship initiative, The Garage School, and our integrated community development programs, we currently serve 
                <span className="font-semibold text-amber-600"> 484+ students</span> across five campuses while providing comprehensive support to over 
                <span className="font-semibold text-amber-600"> 300 families</span>. Our holistic approach encompasses academic instruction, 
                healthcare services, nutritional support, and skills development programs.
              </p>
              
              <p className="text-base md:text-lg">
                We remain committed to our founding principles of educational equity and community empowerment. Through strategic 
                partnerships and sustained community engagement, we continue to expand our impact and create lasting positive change 
                in the lives of those we serve.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-800 font-medium text-lg">Sincerely,</p>
                <p className="text-teal-700 font-bold text-xl mt-2">Mrs. Shabina Mustafa</p>
                <p className="text-gray-600 text-sm">Founder & Chairperson</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessage;