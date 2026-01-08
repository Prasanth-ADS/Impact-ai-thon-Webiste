import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050a14] text-slate-300 font-sans selection:bg-tech-cyan selection:text-black pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-tech-cyan hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-tech-cyan/10 rounded-lg border border-tech-cyan/20">
                        <FileText className="text-tech-cyan" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-slate-400 mb-8">
                        By registering for and participating in IMPACT AI THON '26, you agree to the following terms and conditions.
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Eligibility</h2>
                        <p className="mb-4">
                            Participation involves meeting the following criteria:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li>You must be a verified student of an educational institution.</li>
                            <li>You must be at least 18 years of age or have parental consent.</li>
                            <li>You must register individually or as part of a team (maximum 3 members).</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                        <p className="mb-4">
                            Participants retain ownership of all intellectual property rights to the projects they create during the hackathon. However, you grant IMPACT AI THON '26 a limited, non-exclusive license to showcase, display, and promote your project for marketing and educational purposes.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Code Submission</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li>All code must be original or properly licensed open-source code.</li>
                            <li>Projects must be developed during the hackathon duration (excluding idea generation and planning).</li>
                            <li>Plagiarism or submitting pre-existing projects will result in immediate disqualification.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Liability</h2>
                        <p className="mb-4">
                            IMPACT AI THON '26 and its organizers are not responsible for any personal injury, loss, or damage to property incurred during the event. Participants are responsible for their own belongings and well-being.
                        </p>
                    </section>

                    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Modifications</h3>
                        <p className="text-slate-400">
                            We reserve the right to modify these terms at any time. Significant changes will be communicated to registered participants via email.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
