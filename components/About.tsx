import React, { useState } from 'react';
import { Calendar, Trophy, MapPin, Users, Gift, Lock } from 'lucide-react';
import PrizePool from './PrizePool';

const About: React.FC = () => {

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl w-full">
            <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">About The Event</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Where Technology Meets <br /><span className="text-tech-purple">Human Potential</span>.</h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              IMPACT AI THON '26 is a student-exclusive data analytics hackathon designed to push analytical thinking and technical problem-solving to the next level. This is not a business or idea-pitching event—it is a hands-on challenge where students work directly with data to solve real-world problems.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Open only to students, the hackathon is tailored for aspiring data analysts, data scientists, and machine learning practitioners who want to explore datasets, build analytical models, and derive evidence-based insights using modern tools and techniques. Participants will receive access to curated datasets, technical resources, and expert mentorship to transform raw data into impactful solutions.
            </p>

            <div className="mt-16">
              {/* FEATURED: Cyberpunk Vault Prize Pool */}
              <div className="max-w-5xl mx-auto mb-16">
                <PrizePool />
                <div className="mt-8 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative p-6 bg-slate-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                      <div className="bg-cyan-500/10 p-3 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
                        <Gift className="text-cyan-400 w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-300 text-sm font-mono tracking-wide uppercase border-b border-white/10 pb-1 mb-1 inline-block">
                          <span className="text-cyan-400">///</span> Transmission Incoming
                        </p>
                        <p className="text-slate-300 text-base md:text-lg">
                          Crack the code to win <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl">Rs. 2,000</span> and unlock <span className="text-yellow-400 font-semibold">Priority Shortlisting</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Grid - 3 Columns Below */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-tech-card border border-yellow-400/30 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-2 bg-yellow-500/10 rounded-full">
                      <Calendar className="text-yellow-400" size={28} />
                    </div>
                    <span className="text-slate-500 text-xs font-mono uppercase mb-1">Date Of Event</span>
                    <div className="text-xl font-bold text-white">23 Feb - 24 Feb</div>
                  </div>
                </div>

                <div className="p-6 bg-tech-card border border-purple-400/30 rounded-xl shadow-[0_0_20px_rgba(192,132,252,0.1)] hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-2 bg-purple-500/10 rounded-full">
                      <Users className="text-purple-400" size={28} />
                    </div>
                    <span className="text-slate-500 text-xs font-mono uppercase mb-1">Event Type</span>
                    <div className="text-xl font-bold text-white">Offline</div>
                  </div>
                </div>

                <div className="p-6 bg-tech-card border border-red-400/30 rounded-xl shadow-[0_0_20px_rgba(248,113,113,0.1)] hover:shadow-[0_0_30px_rgba(248,113,113,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-2 bg-red-500/10 rounded-full">
                      <MapPin className="text-red-400" size={28} />
                    </div>
                    <span className="text-slate-500 text-xs font-mono uppercase mb-1">Venue</span>
                    <div className="text-lg font-bold text-white leading-tight">St. Joseph's College of Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;