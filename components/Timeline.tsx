import React from 'react';
import { Calendar, Flag, Trophy, CheckCircle, Rocket } from 'lucide-react';

const Timeline: React.FC = () => {
    const steps = [
        {
            date: 'January 25, 2026',
            title: 'REGISTRATION OPEN',
            description: 'Sign up and create your team. Join our Discord to find teammates.',
            icon: <CheckCircle className="w-6 h-6 text-tech-cyan" />,
            status: 'upcoming'
        },
        {
            date: 'February 15, 2026',
            title: 'ROUND 1 CLOSES',
            description: 'Submit your initial proposal and team details before the deadline.',
            icon: <Calendar className="w-6 h-6 text-tech-purple" />,
            status: 'upcoming'
        },
        {
            date: 'February 18, 2026',
            title: 'ROUND 1 RESULTS',
            description: 'Shortlisted teams announced. Get ready for the main event!',
            icon: <Flag className="w-6 h-6 text-tech-cyan" />,
            status: 'upcoming'
        },
        {
            date: 'February 22, 2026',
            title: 'START OF HACKATHON',
            description: '24-hour non-stop coding begins. Building solutions for a better future.',
            icon: <Rocket className="w-6 h-6 text-tech-electric" />,
            status: 'upcoming'
        },
        {
            date: 'February 23, 2026',
            title: 'FINAL PRESENTATIONS & CONCLUSION',
            description: 'Pitch your project to judges. Winners announced and prizes distributed.',
            icon: <Trophy className="w-6 h-6 text-yellow-400" />,
            status: 'upcoming'
        }
    ];

    return (
        <section className="py-24 bg-tech-dark text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-tech-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-tech-cyan/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Roadmap</h2>
                    <h3 className="text-4xl font-bold">Hackathon <span className="text-tech-purple">Timeline</span></h3>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 md:-ml-[1px]"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Date/Content Spacer for Desktop Alternating Layout */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Icon Node */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-tech-card border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20 group hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-20 md:ml-0 w-full md:w-5/12 p-6 bg-tech-card/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-tech-cyan/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group">
                                        <span className="inline-block px-3 py-1 mb-2 text-xs font-mono text-tech-cyan bg-tech-cyan/10 rounded-full border border-tech-cyan/20">
                                            {step.date}
                                        </span>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-tech-cyan transition-colors">{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
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
