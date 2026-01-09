
import React, { useState } from 'react';
import { Calendar, Flag, Trophy, CheckCircle, Rocket, X, Clock, ChevronRight } from 'lucide-react';

interface Step {
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    status: 'completed' | 'active' | 'upcoming';
}

const Timeline: React.FC = () => {
    const [activeStep, setActiveStep] = useState<Step | null>(null);

    const steps: Step[] = [
        {
            date: 'January 9, 2026',
            title: 'REGISTRATION OPEN',
            description: 'Sign up and create your team. Join our Discord to find teammates. Start your journey!',
            icon: <CheckCircle className="w-8 h-8 text-tech-cyan" />,
            status: 'completed'
        },
        {
            date: 'February 9, 2026',
            title: 'REGISTRATION CLOSES',
            description: 'Submit your initial proposal and team details. Last chance to join the innovation wave.',
            icon: <Calendar className="w-8 h-8 text-tech-purple" />,
            status: 'upcoming'
        },
        {
            date: 'February 15, 2026',
            title: 'SHORTLIST ANNOUNCED',
            description: 'Top teams selected for the grand finale. Prepare for the ultimate showdown.',
            icon: <Flag className="w-8 h-8 text-tech-cyan" />,
            status: 'upcoming'
        },
        {
            date: 'February 23, 2026',
            title: 'HACKATHON BEGINS',
            description: '24-hour non-stop building, coding, and innovating. The clock starts ticking!',
            icon: <Rocket className="w-8 h-8 text-tech-electric" />,
            status: 'upcoming'
        },
        {
            date: 'February 24, 2026',
            title: 'GRAND FINALE',
            description: 'Final pitches, judging, and prize distribution. Celebrating the impact creators.',
            icon: <Trophy className="w-8 h-8 text-yellow-400" />,
            status: 'upcoming'
        }
    ];

    return (
        <section className="py-24 bg-[#050a14] relative overflow-hidden perspective-2000">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tech-purple/20 via-[#050a14] to-[#050a14] pointer-events-none"></div>

            {/* Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-cyan rounded-full animate-ping opacity-20"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-tech-purple rounded-full animate-ping opacity-20 delay-700"></div>
            </div>

            <div className="max-w-[90rem] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Your Journey</h2>
                    <h3 className="text-5xl font-bold text-white mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-purple">Innovation Path</span></h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">Follow the milestones to success. Click on any stage to unlock details.</p>
                </div>

                {/* Horizontal 3D Scroll Container */}
                <div className="relative w-full overflow-x-auto pb-20 pt-10 px-4 hide-scrollbar snap-x snap-mandatory perspective-container">

                    {/* Glowing Track Line */}
                    <div className="absolute top-1/2 left-0 w-[150vw] md:w-full h-1 bg-gradient-to-r from-transparent via-tech-cyan/50 to-transparent -translate-y-1/2 blur-[1px] z-0"></div>
                    <div className="absolute top-1/2 left-0 w-[150vw] md:w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0"></div>

                    <div className="flex gap-6 md:gap-24 min-w-max px-4 md:px-8 md:justify-center items-center h-[500px]">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveStep(step)}
                                className="group relative w-72 h-80 md:w-80 md:h-96 snap-center cursor-pointer transition-all duration-500 transform hover:-translate-y-4 hover:rotate-y-12 perspective-card"
                            >
                                {/* 3D Card Structure */}
                                <div className="relative w-full h-full transform-style-3d transition-transform duration-700">

                                    {/* Glass Card Body */}
                                    <div className="absolute inset-0 bg-[#0a1122]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] group-hover:border-tech-cyan/50 transition-all duration-300">

                                        {/* Top Badge */}
                                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-tech-cyan mb-4 group-hover:bg-tech-cyan group-hover:text-black transition-colors">
                                            MILESTONE 0{index + 1}
                                        </div>

                                        {/* Icon Container with Glow */}
                                        <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <div className="absolute inset-0 bg-tech-cyan/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative w-20 h-20 bg-[#050a14] rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-tech-cyan transition-colors">
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="text-center z-10">
                                            <div className="text-sm text-slate-400 mb-2 font-mono">{step.date}</div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-tech-cyan transition-colors line-clamp-2">{step.title}</h4>
                                        </div>

                                        {/* Bottom Action */}
                                        <div className="mt-4 flex items-center text-xs text-slate-500 group-hover:text-white transition-colors">
                                            View Details <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>

                                        {/* Active State Ring */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-br from-tech-cyan/0 to-tech-purple/0 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:from-tech-cyan/50 group-hover:to-tech-purple/50 blur-md transition-all duration-500 -z-10"></div>
                                    </div>
                                </div>

                                {/* Connection Node to Track */}
                                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#050a14] border-2 border-tech-cyan rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_tech-cyan] z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {activeStep && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setActiveStep(null)}>
                    <div
                        className="relative w-full max-w-2xl bg-[#0a1122] border border-tech-cyan/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] md:p-12 animate-in zoom-in-95 duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveStep(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 flex items-center justify-center border border-white/10 mb-6">
                                    {activeStep.icon}
                                </div>
                                <div className="px-4 py-2 bg-tech-cyan/10 rounded-lg border border-tech-cyan/20 text-tech-cyan font-mono text-sm">
                                    {activeStep.date}
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <h3 className="text-3xl font-bold text-white mb-4">{activeStep.title}</h3>
                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    {activeStep.description}
                                </p>

                                <div className="flex gap-4">
                                    <div className="flex items-center text-sm text-slate-400 bg-white/5 px-4 py-2 rounded-lg">
                                        <Clock size={16} className="mr-2 text-tech-purple" />
                                        Status: <span className="ml-1 text-white capitalize">{activeStep.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
                .perspective-card {
                    transform-style: preserve-3d;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .rotate-y-12 {
                    transform: rotateY(12deg) rotateX(5deg);
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Timeline;

