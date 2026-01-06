import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrizePool from './components/PrizePool';
import DarkVeil from './components/DarkVeil';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrackDetail from './components/TrackDetail';
import Coordinators from './components/Coordinators';


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
        <Schedule />
        <Coordinators />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-slate-200 selection:bg-tech-cyan selection:text-black relative">
        <div className="fixed inset-0 z-[-1] bg-[#050a14]">
          <DarkVeil hueShift={10} speed={0.2} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackId" element={<TrackDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;