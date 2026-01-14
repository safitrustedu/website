import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Laptop, TrendingUp, Target, Users, Zap, Building,
  Wifi, Coffee, BookOpen, ChevronDown, ChevronUp, CheckCircle
} from 'lucide-react';

const DigitalHubPage = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);

  const challenges = [
    {
      icon: Laptop,
      title: 'Digital Gap',
      description: 'Limited access to computers and internet connectivity in low-income communities'
    },
    {
      icon: BookOpen,
      title: 'Skill Gap',
      description: 'Lack of digital literacy and marketable online skills for income generation'
    },
    {
      icon: TrendingUp,
      title: 'Income Stagnation',
      description: 'Traditional income sources provide minimal growth and financial stability'
    },
    {
      icon: Users,
      title: 'Gender Barriers',
      description: 'Women face additional challenges in accessing work opportunities outside home'
    }
  ];

  const skillLevels = [
    {
      level: 1,
      title: 'Basic Digital Skills',
      duration: '4-6 weeks',
      color: 'from-teal-600 to-teal-700',
      skills: [
        'Operating System fundamentals',
        'Email communication and etiquette',
        'Microsoft Office (Word, Excel, PowerPoint)',
        'Internet browsing and online safety',
        'File management and cloud storage basics'
      ],
      outcome: 'Foundation for digital literacy and computer proficiency'
    },
    {
      level: 2,
      title: 'Freelance Economy',
      duration: '8-12 weeks',
      color: 'from-amber-600 to-orange-600',
      skills: [
        'Upwork and Fiverr platform mastery',
        'Profile creation and optimization',
        'Digital marketing fundamentals',
        'Virtual assistance skills',
        'Content writing and editing',
        'Social media management',
        'Basic graphic design tools'
      ],
      outcome: 'Ready to earn through global freelance platforms'
    },
    {
      level: 3,
      title: 'AI-Enhanced Productivity',
      duration: '6-8 weeks',
      color: 'from-purple-600 to-pink-600',
      skills: [
        'Prompt engineering for AI tools',
        'AI-powered content creation',
        'Automated workflow design',
        'ChatGPT and AI assistants mastery',
        'AI-enhanced graphic design',
        'Data analysis with AI tools',
        'Advanced productivity techniques'
      ],
      outcome: 'Competitive advantage through AI-powered skills'
    }
  ];

  const infrastructure = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Reliable fiber-optic connectivity for seamless online work'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: 'Uninterrupted power supply with backup generators'
    },
    {
      icon: Coffee,
      title: 'Professional Atmosphere',
      description: 'Quiet, focused environment conducive to productivity'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Experienced mentors providing guidance and support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Empowerment Hub - Safi Benevolent Trust</title>
        <meta name="description" content="Bridging the digital divide through skills development and co-working infrastructure. Empowering communities with digital skills for sustainable income." />

        <link rel="canonical" href="https://safitrust.com/digital-hub" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/digital-hub" />
        <meta property="og:title" content="Digital Empowerment Hub - Safi Benevolent Trust" />
        <meta property="og:description" content="Bridging the digital divide through skills development and co-working infrastructure." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Empowerment Hub - Safi Benevolent Trust" />
        <meta name="twitter:description" content="Bridging the digital divide through skills development and co-working infrastructure." />
        <meta name="twitter:image" content="https://safitrust.com/TGS.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1689942009554-759940987be0)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <Laptop className="w-5 h-5 text-purple-300" />
              <span className="text-white font-medium">Preliminary Proposal - Rev PB | 7 Jan 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Empowerment Hub
            </h1>
            <p className="text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Bridging the digital divide through skills development and infrastructure
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Building className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                <p className="text-white font-semibold">Location</p>
                <p className="text-purple-200 text-sm mt-1">Neelam Colony, Phase 5, DHA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <Users className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                <p className="text-white font-semibold">Target Group</p>
                <p className="text-purple-200 text-sm mt-1">Low-income men & women</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Status</p>
                <p className="text-purple-200 text-sm mt-1">Space Already Rented</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
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
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the barriers preventing digital economic participation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Pillar Solution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Two-Pillar Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive approach combining skills development and infrastructure
            </p>
          </motion.div>

          {/* Pillar A: Skills Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl shadow-elegant-lg p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Pillar A: Skill Development</h3>
                  <p className="text-gray-600">Progressive learning pathway in three levels</p>
                </div>
              </div>

              <div className="space-y-6">
                {skillLevels.map((level) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
                      className={`w-full bg-gradient-to-r ${level.color} p-6 flex items-center justify-between text-white`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-xl">
                          L{level.level}
                        </div>
                        <div className="text-left">
                          <h4 className="text-xl font-bold">{level.title}</h4>
                          <p className="text-white/90 text-sm">{level.duration}</p>
                        </div>
                      </div>
                      {expandedLevel === level.level ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedLevel === level.level ? 'auto' : 0,
                        opacity: expandedLevel === level.level ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white">
                        <div className="mb-6">
                          <h5 className="font-bold text-gray-900 mb-3">Skills Covered:</h5>
                          <ul className="space-y-2">
                            {level.skills.map((skill, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-teal-50 rounded-xl p-4">
                          <p className="font-semibold text-teal-900 mb-1">Learning Outcome:</p>
                          <p className="text-teal-700">{level.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillar B: Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-3xl shadow-elegant-lg overflow-hidden bg-cover bg-center relative"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1521939708078-d6498bb62747)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-teal-900/90" />

              <div className="relative p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Pillar B: Infrastructure</h3>
                    <p className="text-gray-200">Professional co-working space with essential amenities</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {infrastructure.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-200">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-green-500/20 backdrop-blur-md border-2 border-green-400/50 rounded-2xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-white mb-2">Facility Status</h4>
                  <p className="text-green-100 text-lg">Physical space already rented and ready for setup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Expected Impact
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transforming lives through sustainable digital income opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Economic Transformation',
                description: 'Enabling families to earn sustainable digital income, breaking free from traditional low-wage constraints'
              },
              {
                icon: Users,
                title: 'Inclusivity for Women',
                description: 'Providing safe, accessible opportunities for women to earn from home, empowering financial independence'
              },
              {
                icon: Target,
                title: 'Long-term Sustainability',
                description: 'Building skills that adapt to evolving digital markets, ensuring continuous earning potential'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{impact.title}</h3>
                <p className="text-purple-100 leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalHubPage;