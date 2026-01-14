import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import TGSPage from '../pages/TGSPage';
import DigitalHubPage from '../pages/DigitalHubPage';
import DonateGetInvolvedPage from '../pages/DonateGetInvolvedPage';
import ImpactPage from '../pages/ImpactPage';
import { Toaster } from '../ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Safi Benevolent Trust - Empowering Communities Through Education</title>
        <meta name="description" content="Safi Benevolent Trust provides free education and community development programs in Karachi, Pakistan. Supporting The Garage School and Digital Empowerment Hub." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tgs" element={<TGSPage />} />
            <Route path="/digital-hub" element={<DigitalHubPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/donate" element={<DonateGetInvolvedPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;