import React from 'react';
import LiquidEther from './LiquidEther';
import { Trophy, Medal, Award, Crown, Zap, Code2, Star, Gift } from 'lucide-react';

const PrizePool: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-[#080c16]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <LiquidEther
          colors={['#300344', '#7372df', '#e684cc']}
        />
      </div>


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

        {/* Surprise Prize Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-12 text-center relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                <Gift size={80} className="text-yellow-400 relative z-10 drop-shadow-[0_0_25px_rgba(234,179,8,0.4)] animate-bounce" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Structured & Surprise Prizes
              </h3>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                The total prize pool is divided into exciting categories.
                <span className="block mt-2 text-yellow-400 font-semibold">
                  Specific breakdown and surprise rewards to be revealed!
                </span>
              </p>

              <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <Star size={14} className="text-yellow-500" />
                <span>Stay tuned for the detailed reveal</span>
                <Star size={14} className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PrizePool;