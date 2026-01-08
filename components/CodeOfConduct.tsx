import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeOfConduct: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050a14] text-slate-300 font-sans selection:bg-tech-cyan selection:text-black pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-tech-cyan hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-tech-cyan/10 rounded-lg border border-tech-cyan/20">
                        <Shield className="text-tech-cyan" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-white">Code of Conduct</h1>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-slate-400 mb-8 border-l-4 border-tech-cyan pl-6">
                        IMPACT AI THON '26 is dedicated to providing a harassment-free hackathon experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Standards</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li><strong>Be Respectful:</strong> Treat everyone with respect and dignity. Kindness and empathy are core values of this event.</li>
                            <li><strong>Be Inclusive:</strong> We welcome people from all backgrounds and skill levels. Encourage and help others.</li>
                            <li><strong>Be Collaborative:</strong> Hackathons are about teamwork. Share ideas, give credit where it's due, and build together.</li>
                            <li><strong>No Harassment:</strong> We do not tolerate harassment in any form. This includes offensive comments, intimidation, stalking, harassment, photography or recording without consent, and unwelcome sexual attention.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Enforcement</h2>
                        <p className="mb-4">
                            Participants asked to stop any harassing behavior are expected to comply immediately.
                        </p>
                        <p>
                            If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Reporting</h2>
                        <p className="mb-4">
                            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the organizing team immediately.
                        </p>
                        <p>
                            We will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
                        </p>
                    </section>

                    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
                        <p className="text-slate-400">
                            Contact the organizing team at <a href="mailto:support@impactaithon.com" className="text-tech-cyan hover:underline">support@impactaithon.com</a> or visit the registration desk.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;
