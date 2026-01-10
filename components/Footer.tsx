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
            <a
              href="https://dac-website.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 mb-3 hover:opacity-80 transition-opacity"
            >
              <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-0.5">
                <img
                  src="/Data analytics Club.jpg"
                  alt="Impact AI Thon Logo"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <span className="text-xl font-bold font-mono tracking-tighter text-white">DATA ANALYTICS CLUB</span>
            </a>
            <p className="text-slate-500 text-sm">© 2026 DATA ANALYTICS CLUB. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">

            <a href="https://www.linkedin.com/company/data-analytics-club-ads/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/dac.ads.official?igsh=eTl0bGV2MGxyY3k0" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="mailto:dac.stjosephs@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-600">
          <div className="flex space-x-8">
            <Link to="/code-of-conduct" className="hover:text-tech-cyan">Code of Conduct</Link>
            <Link to="/privacy-policy" className="hover:text-tech-cyan">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-tech-cyan">Terms of Service</Link>
          </div>

          <button className="btn-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text">
              <span>Back</span>
              <span>to</span>
              <span>top</span>
            </div>
            <div className="clone">
              <span>Back</span>
              <span>to</span>
              <span>top</span>
            </div>
            <svg
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;