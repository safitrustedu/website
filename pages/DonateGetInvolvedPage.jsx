import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, BookOpen, Building, Monitor, Mail, Phone, MapPin, GraduationCap, Globe } from 'lucide-react';

const DonateGetInvolvedPage = () => {
  return (
    <>
      <Helmet>
        <title>Support Us - Safi Benevolent Trust</title>
        <meta name="description" content="Support The Garage School through donations, Zakat, and Sadqa. Help us provide free education and healthcare to the underprivileged." />
        <link rel="canonical" href="https://safitrust.com/donate" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safitrust.com/donate" />
        <meta property="og:title" content="Support Us - Safi Benevolent Trust" />
        <meta property="og:description" content="Donate to make a difference. 25 years of empowering children through education." />
        <meta property="og:image" content="https://safitrust.com/TGS.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support Us - Safi Benevolent Trust" />
        <meta name="twitter:description" content="Donate to make a difference. 25 years of empowering children through education." />
        <meta name="twitter:image" content="https://safitrust.com/TGS.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/feedback.jpg)'
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
              <Heart className="w-5 h-5 text-amber-400" fill="currentColor" />
              <span className="text-white font-medium">Make a Difference</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Us
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              Donate to Make a Difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction & Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe every child deserves the gift of education. For 25 years, TGS has been bringing
              the children from lower socioeconomic segment to school and empowering them to dream.
              Please consider your Zakat, Sadqa and Donations for education and help TGS keep these
              dreams alive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'General Donation Fund', icon: Heart, desc: 'Support our day-to-day operations' },
              { title: 'Sponsor a Child', icon: GraduationCap, price: 'PKR 35,000', sub: '/ year' },
              { title: 'Sponsor a Classroom', icon: Building, price: 'PKR 700,000', sub: '/ year' },
              { title: 'Sponsor a Teacher', icon: Users, price: 'PKR 40,000', sub: '/ month' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.price && <p className="text-2xl font-bold text-teal-600">{item.price}</p>}
                {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                {item.desc && <p className="text-gray-600">{item.desc}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Fundraising */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-elegant"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Volunteer or Intern</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Volunteering or Internship offers you a chance to create an impact through your contributions
                to different TGS programs and initiatives. They also allow us to increase our organizational
                capacity and meet the challenges of the growing network. Opportunities are available
                throughout the year in our office and academic programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-elegant"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Raise Funds</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Create your own personal fundraiser now and rally your friends & family to support us.
                Together we can provide quality education to the children belonging to the lower
                socioeconomic segment of the society in Pakistan. All you need is a creative idea to get started
                and we work with you to bring it to life.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                The fundraiser can be a one time activity or a recurring endeavor like a scholarship or fund to
                honor a family member or friend.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How to Contribute</h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">Online Transfers</span>
              <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">Cheques/Cash to TGS Offices</span>
              <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">Via i-Care</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Donations Account */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-amber-400">MEEZAN BANK - DONATIONS</h3>
              <div className="space-y-2">
                <p className="text-sm opacity-80">Account Title</p>
                <p className="font-semibold text-lg">Safi Benevolent Trust</p>
                <p className="text-sm opacity-80 mt-4">IBAN</p>
                <p className="font-mono bg-black/20 p-2 rounded">PK79MEZN0001070100288937</p>
                <p className="text-sm opacity-80 mt-4">Swift Code</p>
                <p className="font-mono">MEZNPKKA</p>
              </div>
            </motion.div>

            {/* Zakat Account */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-300">MEEZAN BANK - ZAKAT</h3>
              <div className="space-y-2">
                <p className="text-sm opacity-80">Account Title</p>
                <p className="font-semibold text-lg">Safi Benevolent Trust-Zakat Account</p>
                <p className="text-sm opacity-80 mt-4">IBAN</p>
                <p className="font-mono bg-black/20 p-2 rounded">PK02MEZN0001070106615111</p>
                <p className="text-sm opacity-80 mt-4">Swift Code</p>
                <p className="font-mono">MEZNPKKA</p>
              </div>
            </motion.div>

            {/* International */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">INTERNATIONAL DONATIONS</h3>
                <p className="mb-6">Through I-CARE FOUNDATION</p>
              </div>
              <a
                href="https://i-care-america.org/charity/safi-benevolent-trust-the-garage-school/donate/?org=Safi%20Benevolent%20Trust%20(The%20Garage%20School)&amount=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-teal-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Donate via i-Care <Globe className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Future Needs</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">A New School Building</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To accommodate ever growing demand for student admissions (our current waiting list is
                over 1000+ students), we are looking to acquire new school building - ideally purchase rather
                than on rent.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Monitor className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Upgrade Existing Facilities</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We are continuously striving to not only upgrade but also introduce new technology and
                facilities in our campuses. You can support us by:
              </p>
              <ul className="space-y-3">
                {[
                  'School and Library Furniture & Fixtures',
                  'Upgrade the Computer Labs at our campuses',
                  'Upgrade classroom environment with technology'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-teal-600">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm">
                Ba-Waqar Plaza, Plot C-1-C, Street 24, Tauheed Comm Area, DHA, Phase 5, Karachi
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-teal-600">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-gray-900 font-semibold">+92-21-35304335</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-teal-600">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-gray-900 font-semibold">thegarageschool@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateGetInvolvedPage;