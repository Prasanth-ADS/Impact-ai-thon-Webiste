import React from 'react';
import { Hexagon, Star, Mail } from 'lucide-react';

const Sponsors: React.FC = () => {
  const platinumSponsors = [
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
    }
  ];

  const giftSponsors = [
    {
      name: "Decathlon",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Decathlon_Logo.svg",
      website: "https://www.decathlon.in/",
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-900/5",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
      description: "The world's largest sporting goods retailer.",
      offering: "Gift Vouchers & Goodies"
    },
    {
      name: "Poorvika",
      image: "https://www.kindpng.com/picc/b/48/480838_poorvika-mobile-shop-logo-hd-png-download.png",
      website: "https://www.poorvika.com/",
      color: "text-orange-400",
      border: "border-orange-500/30",
      bg: "bg-orange-900/5",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]",
      description: "Leading focused multi-brand mobile retailer.",
      offering: "Tech Accessories & Discounts"
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
          <h4 className="text-xl font-bold text-emerald-400 mb-8 uppercase tracking-widest border-b border-emerald-500/20 pb-2 inline-block">Platinum Partner</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {platinumSponsors.map((sponsor, idx) => (
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

        {/* Gift Partners Tier */}
        <div className="mb-16">
          <h4 className="text-xl font-bold text-purple-400 mb-8 uppercase tracking-widest border-b border-purple-500/20 pb-2 inline-block">Gift & Community Partners</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {giftSponsors.map((sponsor, idx) => (
              <div key={idx} className={`relative group p-6 rounded-xl border ${sponsor.border} ${sponsor.bg} hover:scale-105 transition-all duration-300 max-w-xs w-full`}>
                <div className="h-16 w-full mb-4 flex items-center justify-center p-2 bg-white/5 rounded-lg">
                  <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{sponsor.name}</h4>
                <p className="text-xs text-slate-400 mb-2">{sponsor.offering}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-tech-cyan hover:underline"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Want to Sponsor Us */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-tech-purple/20 to-tech-cyan/20 border border-white/10 backdrop-blur-sm text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Want to Sponsor IMPACT-AI-THON 2026?</h3>
            <p className="text-slate-300 mb-8 relative z-10">
              Join us in shaping the future of AI. Connect with top talent, showcase your brand, and be part of an unforgettable experience.
            </p>
            <a href="mailto:sponsors@impactaithon.com" className="inline-flex items-center px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-tech-cyan transition-colors relative z-10 mx-auto">
              <Mail className="w-4 h-4 mr-2" />
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;