import React, { useState } from 'react';
import { Calendar, Trophy, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {

  return (
    <section id="about" className="py-24 bg-tech-dark/90 backdrop-blur-sm relative overflow-hidden">

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              <div className="p-4 bg-tech-card border border-yellow-400/30 rounded shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="text-yellow-400" size={24} />
                  <span className="text-slate-500 text-sm font-mono uppercase">Date Of Event</span>
                </div>
                <div className="text-xl font-bold text-white">22 Feb - 23 Feb</div>
              </div>

              <div className="p-4 bg-tech-card border border-blue-400/30 rounded shadow-[0_0_20px_rgba(96,165,250,0.2)] hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Trophy className="text-blue-400" size={24} />
                  <span className="text-slate-500 text-sm font-mono uppercase">Prize Pool</span>
                </div>
                <div className="text-xl font-bold text-white">₹1,20,000</div>
              </div>

              <div className="p-4 bg-tech-card border border-purple-400/30 rounded shadow-[0_0_20px_rgba(192,132,252,0.2)] hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="text-purple-400" size={24} />
                  <span className="text-slate-500 text-sm font-mono uppercase">Event Type</span>
                </div>
                <div className="text-xl font-bold text-white">Offline</div>
              </div>

              <div className="p-4 bg-tech-card border border-red-400/30 rounded shadow-[0_0_20px_rgba(248,113,113,0.2)] hover:shadow-[0_0_30px_rgba(248,113,113,0.4)] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="text-red-400" size={24} />
                  <span className="text-slate-500 text-sm font-mono uppercase">Venue</span>
                </div>
                <div className="text-lg font-bold text-white leading-tight">St. Joseph's College of Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;