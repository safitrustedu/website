import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, BookOpen, Heart, Apple, Stethoscope } from 'lucide-react';

const TGSPage = () => {
  const sessions = [
    {
      title: 'Morning Session',
      icon: Clock,
      time: '0800 - 1300 hrs',
      students: 331,
      campuses: 3,
      locations: ['TGS-II', 'TGS-III', 'TGS-IV'],
      classes: 'Pre-primary to Matric',
      color: 'from-teal-600 to-teal-700',
      description: 'Comprehensive education program providing quality learning from early childhood through matriculation'
    },
    {
      title: 'Afternoon Session',
      icon: Clock,
      time: '1400 - 1830 hrs',
      students: 101,
      campuses: 2,
      locations: ['TGS-II', 'TGS-III'],
      classes: 'Primary to Matric',
      color: 'from-amber-600 to-orange-600',
      description: 'Extended learning opportunities for students who require flexible scheduling'
    },
    {
      title: 'Fast Track Program',
      icon: BookOpen,
      time: 'Custom Schedule',
      students: 52,
      campuses: 'Multiple',
      locations: ['Specialized Program'],
      classes: 'Out-of-school youth',
      color: 'from-purple-600 to-pink-600',
      description: 'Customized curriculum designed for youth who missed traditional schooling, helping them catch up and reintegrate'
    }
  ];

  const focusAreas = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Quality curriculum from pre-primary through matriculation with experienced teachers'
    },
    {
      icon: Stethoscope,
      title: 'Health',
      description: 'Regular medical checkups, eye-sight testing, and health awareness programs'
    },
    {
      icon: Apple,
      title: 'Nutrition',
      description: 'Daily meals, milk twice weekly, and regular protein supplements for healthy growth'
    },
    {
      icon: Users,
      title: 'Self-Confidence',
      description: 'Building character, leadership skills, and confidence through holistic development'
    }
  ];

  const healthPrograms = [
    {
      title: 'Medical Checkups',
      description: 'Regular health screenings and medical assessments for all students',
      icon: Stethoscope
    },
    {
      title: 'Eye Care',
      description: 'Eye-sight testing with free glasses provision for students in need',
      icon: Heart
    },
    {
      title: 'Women\'s Health',
      description: 'Breast cancer screening and awareness programs for mothers',
      icon: Heart
    }
  ];

  const nutritionPrograms = [
    { item: 'Milk', frequency: 'Twice weekly for all students' },
    { item: 'Biscuits', frequency: 'Daily snacks' },
    { item: 'Chicken Nuggets', frequency: 'Fortnightly for students' },
    { item: 'Chicken', frequency: 'Fortnightly distribution for families' }
  ];

  return (
    <>
      <Helmet>
        <title>The Garage School - Safi Benevolent Trust</title>
        <meta name="description" content="The Garage School provides free education to 484+ students across 5 campuses in Karachi. Changing lives through education since 1999." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/tgs" />
        <meta property="og:title" content="The Garage School - Safi Benevolent Trust" />
        <meta property="og:description" content="Free education for 484+ students across 5 campuses in Karachi." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/tgs logo.webp")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">Since 1999</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Garage School
            </h1>
            <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-4">
              Changing Lives Through Education
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Serving Neelam and Shah Rasool Colonies in Karachi with free, quality education
              and comprehensive community support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sessions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible learning options designed to accommodate every student's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${session.color} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <session.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{session.title}</h3>
                  <p className="text-white/90 text-lg">{session.time}</p>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Students</span>
                      <span className="font-bold text-2xl text-teal-600">{session.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Campuses</span>
                      <span className="font-bold text-xl text-gray-900">{session.campuses}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Locations:</p>
                      <div className="flex flex-wrap gap-2">
                        {session.locations.map((loc, i) => (
                          <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Classes Offered:</p>
                    <p className="text-gray-700">{session.classes}</p>
                  </div>

                  <p className="text-gray-600 mt-4 leading-relaxed">{session.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic development through comprehensive support programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1652407173066-6bca9753ffea)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-teal-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Community Development Programs
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Supporting families through comprehensive health and nutrition initiatives
            </p>
          </motion.div>

          {/* Health Programs */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Health Programs
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-6">
              {healthPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{program.title}</h4>
                  <p className="text-gray-200">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nutrition Programs */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Nutrition Programs
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {nutritionPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Apple className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{program.item}</h4>
                    <p className="text-gray-200 text-sm">{program.frequency}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ramadan & Eid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ramadan & Eid Initiatives</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">300+</div>
                <p className="text-xl text-white">Ration packages distributed</p>
                <p className="text-gray-200 mt-2">Monthly food support for families</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">Complete</div>
                <p className="text-xl text-white">Eid clothing distribution</p>
                <p className="text-gray-200 mt-2">New clothes for every child</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TGSPage;