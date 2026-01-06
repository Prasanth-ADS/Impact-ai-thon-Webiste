import React, { useState } from 'react';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Prize Pool', value: '₹1.5 Lakh+', icon: <Trophy className="text-yellow-400" size={24} /> },
    { label: 'Participants', value: '500+', icon: <Users className="text-blue-400" size={24} /> },
    { label: 'Mentors', value: '40+', icon: <Lightbulb className="text-purple-400" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-tech-dark/90 backdrop-blur-sm relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl w-full">
            <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">About The Event</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Where Technology Meets <br /><span className="text-tech-purple">Human Potential</span>.</h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              IMPACT-AI-THON 2026 is a student-exclusive data analytics hackathon designed to push analytical thinking and technical problem-solving to the next level. This is not a business or idea-pitching event—it is a hands-on challenge where students work directly with data to solve real-world problems.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Open only to students, the hackathon is tailored for aspiring data analysts, data scientists, and machine learning practitioners who want to explore datasets, build analytical models, and derive evidence-based insights using modern tools and techniques. Participants will receive access to curated datasets, technical resources, and expert mentorship to transform raw data into impactful solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 bg-tech-card border border-slate-800 rounded hover:border-tech-cyan/50 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    {stat.icon}
                    <span className="text-slate-500 text-sm font-mono uppercase">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;