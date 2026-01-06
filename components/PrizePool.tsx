import React from 'react';
import { Trophy, Medal, Award, Crown, Zap, Code2, Star, Gift } from 'lucide-react';

const PrizePool: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-[#080c16]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.05),transparent_70%)] pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Trophy size={16} className="text-yellow-500 mr-2" />
            <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">Total Rewards</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ₹1,20,000+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">PRIZE POOL</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Compete for cash prizes, venture capital introductions, and enterprise-grade tech stacks.
            Your code could build the next unicorn.
          </p>
        </div>

        {/* Main Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-20 max-w-5xl mx-auto">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 bg-[#0f172a]/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center hover:border-slate-500 transition-all duration-300 group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-slate-400/20 blur-xl rounded-full group-hover:bg-slate-400/30 transition-all"></div>
              <Medal size={64} className="text-slate-300 relative z-10" />
            </div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Runner Up</div>
            <h3 className="text-2xl font-bold text-white mb-2">2nd Place</h3>
            <div className="text-4xl font-mono font-bold text-tech-cyan mb-6">₹40,000</div>
            <ul className="text-left w-full space-y-3 text-slate-400 text-sm border-t border-slate-800 pt-6">
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> Cloud Credits</li>
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> Gadget Bundle</li>
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> Mentor Sessions</li>
            </ul>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] border border-yellow-500/30 rounded-2xl p-8 pb-10 flex flex-col items-center transform md:-translate-y-8 shadow-[0_0_40px_rgba(234,179,8,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            <div className="relative mb-8 mt-2">
              <div className="absolute inset-0 bg-yellow-500/30 blur-2xl rounded-full animate-pulse-slow"></div>
              <Trophy size={80} className="text-yellow-400 relative z-10 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            </div>

            <div className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-1">Grand Champion</div>
            <h3 className="text-3xl font-black text-white mb-2">1st Place</h3>
            <div className="text-6xl font-mono font-bold text-white mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-500">₹60,000</div>

            <ul className="text-left w-full space-y-4 text-slate-300 text-sm border-t border-yellow-500/20 pt-8">
              <li className="flex items-center font-semibold"><Crown size={16} className="mr-3 text-yellow-500" /> Direct Accelerator Interview</li>
              <li className="flex items-center"><Gift size={16} className="mr-3 text-yellow-500" /> ₹50k Startup Credits</li>
              <li className="flex items-center"><Zap size={16} className="mr-3 text-yellow-500" /> Global Press Feature</li>
              <li className="flex items-center"><Award size={16} className="mr-3 text-yellow-500" /> HQ Office Tour</li>
            </ul>
          </div>

          {/* 3rd Place */}
          <div className="order-3 bg-[#0f172a]/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center hover:border-amber-700/50 transition-all duration-300 group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-amber-700/20 blur-xl rounded-full group-hover:bg-amber-700/30 transition-all"></div>
              <Medal size={64} className="text-amber-700 relative z-10" />
            </div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Finalist</div>
            <h3 className="text-2xl font-bold text-white mb-2">3rd Place</h3>
            <div className="text-4xl font-mono font-bold text-tech-cyan mb-6">₹20,000</div>
            <ul className="text-left w-full space-y-3 text-slate-400 text-sm border-t border-slate-800 pt-6">
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> Cloud Credits</li>
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> Swag Pack</li>
              <li className="flex items-center"><Star size={14} className="mr-2 text-slate-500" /> API Access</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PrizePool;