import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TRACKS } from '../data/tracks';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import LiquidEther from './LiquidEther';

const TrackDetail: React.FC = () => {
    const { trackId } = useParams<{ trackId: string }>();
    const navigate = useNavigate();
    const track = TRACKS.find(t => t.id === trackId);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!track) {
            navigate('/');
        }
    }, [track, navigate]);

    if (!track) return null;

    const Icon = track.icon;

    return (
        <div className="font-sans antialiased text-slate-200 selection:bg-tech-cyan selection:text-black relative min-h-screen flex flex-col">
            <div className="fixed inset-0 z-[-1] bg-[#050a14]">
                <LiquidEther
                    colors={['#300344', '#7372df', '#e684cc']}
                />
            </div>

            <Navbar />

            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center text-tech-cyan hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono tracking-widest uppercase text-sm">Back to Home</span>
                    </Link>

                    <div className="relative mb-20">
                        <div className={`inline-flex p-4 rounded-2xl bg-tech-card border-2 ${track.color} mb-8 shadow-[0_0_30px_-10px] shadow-current/30`}>
                            <Icon size={48} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                            {track.title}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-12">
                            {track.description}
                        </p>

                        {/* Track Objective Section */}
                        {track.objective && (
                            <div className="mb-12 bg-tech-card/30 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
                                <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-4 uppercase flex items-center">
                                    <span className="w-4 h-px bg-tech-cyan/50 mr-2"></span>
                                    Track Objective
                                </h2>
                                <p className="text-lg text-white leading-relaxed">
                                    {track.objective}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* Global Constraints Section */}
                            {track.constraints && (
                                <div className="bg-tech-card/30 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
                                    <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-6 uppercase flex items-center">
                                        <span className="w-4 h-px bg-tech-cyan/50 mr-2"></span>
                                        Global Constraints
                                    </h2>
                                    <ul className="space-y-4">
                                        {track.constraints.map((constraint, idx) => (
                                            <li key={idx} className="flex items-start text-slate-300">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tech-cyan mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">{constraint}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Evaluation Focus Section */}
                            {track.evaluation && (
                                <div className="bg-tech-card/30 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
                                    <h2 className="text-tech-purple font-mono text-sm tracking-widest mb-6 uppercase flex items-center">
                                        <span className="w-4 h-px bg-tech-purple/50 mr-2"></span>
                                        Evaluation Focus
                                    </h2>
                                    <ul className="space-y-4">
                                        {track.evaluation.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-slate-300">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tech-purple mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="w-8 h-1 bg-tech-cyan mr-4 rounded-full"></span>
                            PROBLEM STATEMENTS
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {track.problems.map((problem, idx) => (
                                <div
                                    key={idx}
                                    className="bg-tech-card/50 backdrop-blur-md border border-slate-800 rounded-xl p-8 hover:border-tech-cyan/50 hover:bg-tech-card/80 transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-tech-cyan/5 rounded-full blur-2xl group-hover:bg-tech-cyan/20 transition-all"></div>
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="text-tech-cyan font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                                            CHALLENGE_0{idx + 1}
                                        </span>
                                        <ChevronRight size={20} className="text-slate-600 group-hover:text-tech-cyan group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-tech-cyan/5 border border-tech-cyan/20 rounded-2xl p-8 md:p-12 text-center mt-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-50"></div>
                        <h3 className="text-3xl font-bold text-white mb-4">Ready to tackle this track?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Join the competition and build a solution that makes an impact. Registration is open until the hackathon starts.
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSck7l4BxrEqXGfZzRx8fxryPb5f3v-sPgyz5Xfm6AyYnapHPg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-tech-cyan text-black font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95"
                        >
                            REGISTER_FOR_THIS_TRACK
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TrackDetail;
