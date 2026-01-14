import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Award, Users, Book } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Serving with empathy and understanding the needs of our community'
    },
    {
      icon: Book,
      title: 'Education First',
      description: 'Believing education is the foundation for breaking the cycle of poverty'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Working together to create sustainable change and empowerment'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining high standards in all our programs and services'
    }
  ];

  const milestones = [
    { year: '1999', event: 'The Garage School founded with 30 students' },
    { year: '2005', event: 'Expanded to second campus' },
    { year: '2010', event: 'Launched community health programs' },
    { year: '2015', event: 'Reached 300+ students milestone' },
    { year: '2020', event: 'Introduced fast track program' },
    { year: '2026', event: 'Planning Digital Empowerment Hub' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Safi Benevolent Trust</title>
        <meta name="description" content="Learn about Safi Benevolent Trust's mission, history, and commitment to providing free education and community development in Karachi." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/about" />
        <meta property="og:title" content="About Us - Safi Benevolent Trust" />
        <meta property="og:description" content="Learn about our mission to provide free education and community development since 1999." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("/about.jpeg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              A legacy of love, dedication, and transformative education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 shadow-elegant"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide free, quality education and comprehensive community development programs
                to underprivileged children and families, empowering them to break the cycle of poverty
                and build better futures through education, healthcare, and skills development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-elegant"
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A society where every child, regardless of their economic background, has access to
                quality education and opportunities for growth. We envision communities where education
                serves as the foundation for sustainable development and lasting social change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small garage to a transformative educational institution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-grow bg-white rounded-2xl p-6 shadow-elegant">
                    <p className="text-gray-800 text-lg">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-elegant-lg">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-teal-700 text-5xl font-bold mx-auto mb-6 shadow-lg">
                  SM
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Mrs. Shabina Mustafa</h3>
                <p className="text-teal-100 text-lg mb-4">Founder & Chairperson</p>
                <p className="text-white/90">
                  In loving memory of Flt. Lt. Syed Safi Mustafa Shaheed
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Service
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Mrs. Shabina Mustafa founded Safi Benevolent Trust in 1999 to honor the memory
                of her husband, Flt. Lt. Syed Safi Mustafa Shaheed, who sacrificed his life serving Pakistan.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                What began as a small educational initiative in a garage has grown into a comprehensive
                community development organization, touching the lives of hundreds of families through
                education, healthcare, and social support programs.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Her vision and dedication continue to inspire our work, ensuring that no child is denied
                education due to financial constraints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-teal-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;