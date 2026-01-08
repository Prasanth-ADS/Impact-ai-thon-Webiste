import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialShare from './SocialShare';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-0.5">
                <img
                  src="/LOGO.jpeg"
                  alt="Impact AI Thon Logo"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <span className="text-xl font-bold font-mono tracking-tighter text-white">IMPACT AI THON '26</span>
            </div>
            <p className="text-slate-500 text-sm">© 2026 IMPACT AI THON '26. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">

            <a href="https://www.linkedin.com/company/data-analytics-club-ads/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/dac.ads.official?igsh=eTl0bGV2MGxyY3k0" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-red-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-8 flex justify-center space-x-8 text-xs text-slate-600">
          <Link to="/code-of-conduct" className="hover:text-tech-cyan">Code of Conduct</Link>
          <Link to="/privacy-policy" className="hover:text-tech-cyan">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-tech-cyan">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;