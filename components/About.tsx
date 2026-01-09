import React, { useState } from 'react';
import { Calendar, Trophy, MapPin, Users, Gift, Lock } from 'lucide-react';

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
              <div className="max-w-xl mx-auto mb-16">
                <div
                  className="bg-[#050a14]/90 backdrop-blur-xl border border-tech-cyan/30 rounded-2xl p-6 md:p-10 text-center relative overflow-hidden group hover:border-tech-cyan/80 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                >
                  {/* Scanning Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-tech-cyan/5 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-100"></div>

                  <div className="flex flex-col items-center relative z-10 font-mono">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-tech-cyan/20 blur-2xl rounded-full scale-150 group-hover:animate-pulse"></div>
                      <Lock className="text-tech-cyan group-hover:animate-bounce transition-transform duration-300" size={64} />
                    </div>

                    <span className="text-tech-purple text-xs tracking-[0.3em] uppercase mb-2 group-hover:text-red-500 transition-colors">
                      {/* Changes on hover via CSS content is tricky, sticking to static label for status */}
                      SECURE STORAGE // ENCRYPTED
                    </span>

                    <div className="relative h-20 flex items-center justify-center w-full overflow-hidden">
                      {/* Normal State */}
                      <div className="text-3xl md:text-6xl font-black text-white tracking-tighter group-hover:translate-y-20 transition-transform duration-300 absolute inset-0 flex items-center justify-center">
                        ₹1,20,000
                      </div>

                      {/* Hover State - Glitch Text */}
                      <div className="text-2xl md:text-5xl font-black text-red-500 tracking-widest translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-200 absolute inset-0 flex items-center justify-center font-heading drop-shadow-[2px_2px_0px_rgba(255,0,0,0.5)]">
                        ACCESS DENIED
                      </div>
                    </div>

                    <div className="mt-4 flex items-center space-x-2 text-xs text-slate-500 border border-slate-800 rounded-full px-3 py-1 group-hover:border-red-500/50 group-hover:text-red-400 transition-colors">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:bg-red-500"></div>
                      <span className="group-hover:hidden">SYSTEM STABLE</span>
                      <span className="hidden group-hover:inline">BREACH DETECTED</span>
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
                    <div className="text-xl font-bold text-white">22 Feb - 23 Feb</div>
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