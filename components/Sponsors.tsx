import React from 'react';
import { Hexagon, Globe, Shield, Cpu, Cloud, Database, Code, Lock, Star } from 'lucide-react';

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: "Wareef",
      image: "https://wareef.com.sa/static/wareef_logo-b6eea834a9dea209b1b9ebe144b3d9b9.svg",
      website: "https://wareef.com.sa/",
      color: "text-emerald-400",
      border: "border-emerald-500/50",
      bg: "bg-emerald-900/10",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
      description: "Leading IT solution provider specializing in vendor management, quality assurance, and localized Arabic content for digital transformation.",
      challenges: ["Local Arabic Content AI", "Enterprise Solution Design", "Quality Assurance Automation"]
    },
    {
      name: "CodeWork",
      image: "https://codework.ai/Logo.svg",
      website: "https://codework.ai/",
      color: "text-blue-400",
      border: "border-blue-500/50",
      bg: "bg-blue-900/10",
      hoverShadow: "hover:shadow-[0_0_30_px_rgba(59,130,246,0.2)]",
      description: "Custom AI software development and innovation agency building powerful automation tools and intelligent enterprise applications.",
      challenges: ["Generative AI Implementation", "Custom Automation Flow", "Neural Network Optimization"]
    }
  ];

  return (
    <section id="sponsors" className="py-24 bg-[#050a14]/95 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-purple/10 via-transparent to-transparent pointer-events-none"></div>


      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Our Partners</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Powering the <span className="text-tech-purple">Future</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Meet the industry leaders providing the technology, mentorship, and resources for IMPACT-AI-THON 2026.
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className={`relative group p-8 rounded-2xl border ${sponsor.border} ${sponsor.bg} hover:scale-105 ${sponsor.hoverShadow} transition-all duration-300 overflow-hidden max-w-sm w-full will-change-transform`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_ease_infinite]"></div>

                {/* Main Content (Fades out on Hover) */}
                <div className="transition-all duration-300 group-hover:opacity-10 group-hover:blur-sm transform group-hover:scale-95 flex flex-col items-center">
                  <div className="absolute top-0 right-0 p-4 opacity-50 transition-all duration-500">
                    <Hexagon size={24} className={sponsor.color} />
                  </div>

                  {/* Image Container */}
                  <div className="h-24 w-full mb-6 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h4>
                  <p className="text-xs text-slate-500 italic uppercase tracking-tighter">Official Sponsor</p>

                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-tech-cyan hover:text-white transition-colors flex items-center justify-center mx-auto mt-6 no-underline font-mono border border-tech-cyan/30 px-4 py-2 rounded-full hover:bg-tech-cyan/20"
                  >
                    VISIT_WEBSITE <span className="ml-1 tracking-normal">→</span>
                  </a>
                </div>

                {/* Hover Overlay (Fades in) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-[#050a14]/98 border border-tech-cyan/20 will-change-[opacity]">
                  <p className="text-slate-300 text-sm text-center mb-6 leading-relaxed font-medium">
                    {sponsor.description}
                  </p>
                  <div className="w-full">
                    <div className="text-xs font-bold text-tech-cyan uppercase tracking-wider mb-2 border-b border-slate-700 pb-1">Sponsorship Areas</div>
                    <ul className="text-left space-y-2 mb-6">
                      {sponsor.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="text-xs text-white flex items-start">
                          <Star size={10} className="mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-tech-cyan text-black font-bold rounded-lg text-center transition-all hover:bg-white block no-underline text-xs uppercase tracking-widest"
                    >
                      Explore Solutions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;