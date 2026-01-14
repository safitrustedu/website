import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Users, Laptop, ArrowRight } from 'lucide-react';
import Hero from '../Components/Hero';
import FounderMessage from '../Components/FounderMessage';
import YouTubeSection from '../Components/YouTubeSection';
import { Button } from '../ui/button';


const HomePage = () => {
  const projects = [
    {
      title: 'The Garage School',
      description: 'A comprehensive educational institution serving 484+ students across five strategically located campuses, delivering quality academic programs since 1999.',
      icon: GraduationCap,
      image: '/tgs-logo.webp', // Updated to use local image if available or keep external
      link: '/tgs',
      color: 'from-primary-dark to-primary'
    },
    {
      title: 'Digital Empowerment Hub',
      description: 'Advanced technology training center providing digital literacy, professional skills development, and co-working facilities for community advancement.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1689942009554-759940987be0',
      link: '/digital-hub',
      color: 'from-secondary-dark to-secondary'
    }
  ];

  const impacts = [
    {
      icon: Heart,
      title: 'Healthcare Services',
      description: 'Comprehensive medical programs including regular health screenings, vision care, and preventive health education initiatives'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Holistic family support services including nutritional assistance, emergency aid, and capacity building programs for 300+ families'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Complete educational pathway from pre-primary through matriculation with integrated co-curricular and life skills development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Safi Benevolent Trust - Empowering Communities Through Education</title>
        <meta name="description" content="Safi Benevolent Trust provides free education and community development programs in Karachi. Join us in making a difference." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/" />
        <meta property="og:title" content="Safi Benevolent Trust - Empowering Communities" />
        <meta property="og:description" content="Providing free education and healthcare to underprivileged communities in Karachi since 1999." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://safitrust.com/" />
        <meta property="twitter:title" content="Safi Benevolent Trust - Empowering Communities" />
        <meta property="twitter:description" content="Providing free education and healthcare to underprivileged communities in Karachi since 1999." />
        <meta property="twitter:image" content="https://safitrust.com/TGS.jpg" />
      </Helmet>

      <Hero />

      <FounderMessage />

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational and development initiatives designed to create sustainable impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link to={project.link}>
                  <div className="group relative h-96 rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm">
                        <div className="mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                            <project.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-gray-700 text-base mb-4">{project.description}</p>
                        </div>

                        <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                          Learn More <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating lasting change in communities through comprehensive support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-primary mb-3">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <YouTubeSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Your support can transform lives. Every contribution helps us provide education,
              healthcare, and opportunities to those who need it most.
            </p>
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 py-6 text-lg shadow-elegant"
              >
                Donate Now
                <Heart className="ml-2 w-5 h-5" fill="currentColor" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;