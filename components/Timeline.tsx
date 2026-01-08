import React from 'react';
import { Calendar, Flag, Trophy, CheckCircle, Rocket, Cpu } from 'lucide-react';

const Timeline: React.FC = () => {
    const steps = [
        {
            date: 'January 9, 2026',
            title: 'REGISTRATION OPEN',
            description: 'Sign up and create your team. Join our Discord to find teammates. Start your journey!',
            icon: <CheckCircle className="w-6 h-6 text-tech-cyan" />,
            status: 'completed'
        },
        {
            date: 'February 9, 2026',
            title: 'REGISTRATION CLOSES',
            description: 'Submit your initial proposal and team details. Last chance to join the innovation wave.',
            icon: <Calendar className="w-6 h-6 text-tech-purple" />,
            status: 'upcoming'
        },
        {
            date: 'February 15, 2026',
            title: 'SHORTLIST ANNOUNCED',
            description: 'Top teams selected for the grand finale. Prepare for the ultimate showdown.',
            icon: <Flag className="w-6 h-6 text-tech-cyan" />,
            status: 'upcoming'
        },
        {
            date: 'February 23, 2026',
            title: 'HACKATHON BEGINS',
            description: '24-hour non-stop building, coding, and innovating. The clock starts ticking!',
            icon: <Rocket className="w-6 h-6 text-tech-electric" />,
            status: 'upcoming'
        },
        {
            date: 'February 24, 2026',
            title: 'GRAND FINALE',
            description: 'Final pitches, judging, and prize distribution. Celebrating the impact creators.',
            icon: <Trophy className="w-6 h-6 text-yellow-400" />,
            status: 'upcoming'
        }
    ];

    return (
        <section className="py-24 bg-[#050a14] relative overflow-hidden">
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center justify-center p-2 mb-4 bg-tech-cyan/5 rounded-full border border-tech-cyan/20 backdrop-blur-sm">
                        <Cpu className="w-4 h-4 text-tech-cyan mr-2" />
                        <span className="text-tech-cyan font-mono text-xs tracking-widest uppercase">Event Sequence</span>
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-purple">Circuit</span></h3>
                    <p className="text-slate-400">Follow the path to innovation</p>
                </div>

                <div className="relative">
                    {/* Central Glowing Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-cyan via-tech-purple to-tech-cyan/20 md:-ml-[1px] shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>

                    <div className="space-y-16">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Central Node */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                        <div className="relative w-8 h-8 rounded-full bg-[#050a14] border-2 border-tech-cyan z-20 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-16 md:ml-0 w-full md:w-5/12 group perspective-card">
                                        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-tech-cyan/20 via-tech-purple/20 to-transparent transition-all duration-300 group-hover:from-tech-cyan group-hover:to-tech-purple p-[1px]">
                                            <div className="relative bg-[#0a1122]/90 backdrop-blur-xl p-6 rounded-2xl h-full border border-white/5 hover:border-white/10 transition-all">

                                                {/* Connecting Trace (Desktop) */}
                                                <div className={`hidden md:block absolute top-1/2 ${isEven ? '-right-10' : '-left-10'} w-10 h-[1px] bg-gradient-to-r from-tech-cyan to-transparent ${isEven ? 'rotate-180' : ''}`}></div>

                                                {/* Connecting Trace (Mobile) */}
                                                <div className="md:hidden absolute top-8 -left-12 w-12 h-[1px] bg-tech-cyan/50"></div>

                                                <div className="flex items-start justify-between mb-4">
                                                    <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-tech-cyan bg-tech-cyan/10 rounded border border-tech-cyan/20">
                                                        {step.date}
                                                    </span>
                                                    <div className="p-2 bg-white/5 rounded-lg text-tech-purple group-hover:text-white group-hover:bg-tech-purple transition-colors">
                                                        {step.icon}
                                                    </div>
                                                </div>

                                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-tech-cyan transition-colors">{step.title}</h4>
                                                <p className="text-sm text-slate-400 leading-relaxed font-light">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
