import React from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050a14] text-slate-300 font-sans selection:bg-tech-cyan selection:text-black pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-tech-cyan hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-tech-cyan/10 rounded-lg border border-tech-cyan/20">
                        <Lock className="text-tech-cyan" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-slate-400 mb-8">
                        Last Updated: January 8, 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us when you register for IMPACT AI THON '26. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li>Name and contact information (email, phone number)</li>
                            <li>University or organization affiliation</li>
                            <li>Technical skills and portfolio links (GitHub, LinkedIn)</li>
                            <li>Dietary restrictions and t-shirt size</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li>To process your registration and participation in the hackathon.</li>
                            <li>To communicate with you about event updates, schedules, and logistics.</li>
                            <li>To connect you with sponsors and partners (only with your explicit consent).</li>
                            <li>To improve our future events based on feedback and participation data.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                        <p className="mb-4">
                            We do not sell your personal data. We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-300">
                            <li>**Service Providers:** Tools we use for registration, communication, and event management.</li>
                            <li>**Sponsors:** If you opt-in to share your resume or contact info with our sponsors for recruitment purposes.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Media and Photography</h2>
                        <p className="mb-4">
                            By attending IMPACT AI THON '26, you acknowledge that you may be photographed or filmed. These images may be used for marketing and promotional purposes. If you do not wish to be photographed, please inform the registration desk upon arrival.
                        </p>
                    </section>

                    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-slate-400">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@impactaithon.com" className="text-tech-cyan hover:underline">privacy@impactaithon.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
