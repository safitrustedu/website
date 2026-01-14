import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Heart, TrendingUp, Award, GraduationCap, Apple, Home, ExternalLink } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const StatCard = ({ end, suffix = '', label, icon: Icon, delay = 0 }) => {
  const count = useAnimatedCounter(end, 2000, delay);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-5xl font-bold text-teal-600 mb-2 text-center">
        {count}{suffix}
      </div>
      <p className="text-gray-700 font-semibold text-center text-lg">{label}</p>
    </motion.div>
  );
};

const ImpactPage = () => {
  const communityPrograms = [
    {
      icon: Heart,
      title: 'Healthcare Initiatives',
      items: [
        'Regular medical checkups for all students',
        'Eye-sight testing with free glasses',
        'Breast cancer screening for mothers',
        'Health awareness sessions'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Apple,
      title: 'Nutrition Programs',
      items: [
        'Daily biscuits for all students',
        'Milk twice weekly',
        'Fortnightly chicken nuggets',
        'Monthly chicken distribution to families'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Home,
      title: 'Family Support',
      items: [
        'Monthly ration packages for 300+ families',
        'Complete Eid clothing for children',
        'Emergency financial assistance',
        'Community development workshops'
      ],
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: '25+ Years of Service',
      description: 'Continuously providing free quality education since 1999'
    },
    {
      icon: Users,
      title: '5 Campus Locations',
      description: 'Expanding reach across underserved communities in Karachi'
    },
    {
      icon: Award,
      title: '100% Free Education',
      description: 'No fees charged from pre-primary through matriculation'
    },
    {
      icon: TrendingUp,
      title: 'Growing Impact',
      description: 'Continuously expanding programs to serve more families'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Impact - Safi Benevolent Trust</title>
        <meta name="description" content="See the transformative impact of Safi Benevolent Trust's education and community development programs serving 484+ students and 300+ families." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/impact" />
        <meta property="og:title" content="Our Impact - Safi Benevolent Trust" />
        <meta property="og:description" content="Transforming lives through education, healthcare, and community support." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1642815030081-4ac25bc72618)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-gray-900/90" />

        {/* Safi Trust Logo - Top Left */}
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <img src="/safitrustlogo.jpg" alt="Safi Benevolent Trust" className="w-20 md:w-24 h-auto rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Impact
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              Transforming lives and communities through education, healthcare, and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impact By Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real data showing the reach and effectiveness of our programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              end={331}
              suffix=""
              label="Morning Session Students"
              icon={Users}
              delay={0}
            />
            <StatCard
              end={101}
              suffix=""
              label="Afternoon Session Students"
              icon={Users}
              delay={0.1}
            />
            <StatCard
              end={52}
              suffix=""
              label="Fast Track Students"
              icon={GraduationCap}
              delay={0.2}
            />
            <StatCard
              end={300}
              suffix="+"
              label="Families Supported"
              icon={Home}
              delay={0.3}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <StatCard
              end={5}
              suffix=""
              label="Campus Locations"
              icon={Award}
              delay={0.4}
            />
            <StatCard
              end={25}
              suffix="+"
              label="Years of Service"
              icon={TrendingUp}
              delay={0.5}
            />
            <StatCard
              end={484}
              suffix="+"
              label="Total Students"
              icon={GraduationCap}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Community Programs */}
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
              Community Development Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support extending beyond education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500 overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${program.color} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>

                <div className="p-8">
                  <ul className="space-y-3">
                    {program.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ramadan & Eid Impact */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ramadan & Eid Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special initiatives during holy months bringing joy to families
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-elegant text-center"
            >
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-white" />
              </div>
              <div className="text-6xl font-bold text-amber-600 mb-4">300+</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ration Packages</h3>
              <p className="text-gray-600 text-lg">
                Monthly food ration distribution to support families during Ramadan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-elegant text-center"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <div className="text-6xl font-bold text-teal-600 mb-4">100%</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Eid Clothing</h3>
              <p className="text-gray-600 text-lg">
                Complete new outfits distributed to every child for Eid celebrations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Milestones that demonstrate our commitment and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-teal-100">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognized By Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized By
            </h2>
            <p className="text-lg text-gray-600">
              Our work has been acknowledged by leading organizations and publications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://i-care-foundation.org/charity/safi-benevolent-trust-the-garage-school/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">I-Care Foundation</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
            </a>
            <a href="https://www.iamthechange.com.pk/projects/the-garage-school/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">I Am The Change</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
            </a>
            <a href="https://www.globalgiving.org/projects/the-garage-school-expansion/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">GlobalGiving</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
            </a>
            <a href="http://thekarachiwalla.com/2012/01/30/city-landmarks-the-garage-school/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">The Karachi Walla</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
            </a>
            <a href="https://campusguru.pk/en/ngos/karachi/the-garage-school-tgs" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
              <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors">Campus Guru</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;