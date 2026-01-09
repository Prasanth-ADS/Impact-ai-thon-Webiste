import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrizePool from './components/PrizePool';
import LiquidEther from './components/LiquidEther';
import Timeline from './components/Timeline';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrackDetail from './components/TrackDetail';
import Coordinators from './components/Coordinators';

import Loader from './components/Loader';
import CodeOfConduct from './components/CodeOfConduct';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';


const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Tracks />
        <PrizePool />
        <Sponsors />
        <Timeline />
        <Coordinators />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="font-sans antialiased text-slate-200 selection:bg-tech-cyan selection:text-black relative">
        <div className="fixed inset-0 z-[-1] bg-[#050a14]">
          <LiquidEther
            colors={['#300344', '#7372df', '#e684cc']}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackId" element={<TrackDetail />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
};

export default App;
