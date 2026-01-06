import React from 'react';
import { TRACKS } from '../data/tracks';
import { Link } from 'react-router-dom';

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="py-24 bg-[#080e1c]/90 backdrop-blur-sm relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Hackathon Tracks</h2>
          <h3 className="text-4xl font-bold text-white">Choose Your <span className="text-tech-cyan">Arena</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRACKS.map((track, idx) => {
            const Icon = track.icon;
            return (
              <Link
                key={idx}
                to={`/track/${track.id}`}
                className={`group bg-tech-card p-10 rounded-2xl border-l-[6px] ${track.color} hover:-translate-y-3 transition-all duration-500 relative overflow-hidden cursor-pointer block no-underline shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-tech-cyan/20`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-125 duration-700">
                  <Icon size={120} />
                </div>
                <div className={`mb-8 p-3 inline-block rounded-xl bg-slate-800/50 ${track.color} group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-tech-cyan transition-colors">{track.title}</h4>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {track.description}
                </p>
                <div className="flex items-center text-tech-cyan text-sm font-bold tracking-widest uppercase group-hover:gap-2 transition-all">
                  VIEW_CHALLENGES <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;