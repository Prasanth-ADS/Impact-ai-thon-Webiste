import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface CoordinatorProps {
    name: string;
    role: string;
    phone: string;
    email: string;
    linkedin: string;
    image?: string;
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, role, phone, email, linkedin, image }) => {
    return (
        <div className="group relative bg-[#0a1122]/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 transition-all duration-500 hover:border-tech-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-tech-cyan/5 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:bg-tech-cyan/10 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 relative">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 p-1 group-hover:border-tech-cyan/50 transition-all duration-500 overflow-hidden">
                        <img
                            src={image || "/LOGO.jpeg"}
                            alt={name}
                            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-tech-cyan rounded-full flex items-center justify-center border-2 border-[#0a1122]">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-tech-cyan transition-colors duration-300">{name}</h4>
                <p className="text-tech-purple font-mono text-xs tracking-wider uppercase mb-6">{role}</p>

                <div className="flex items-center space-x-4">
                    <a
                        href={`tel:${phone}`}
                        className="p-2.5 rounded-xl bg-slate-800/50 text-slate-400 hover:text-tech-cyan hover:bg-tech-cyan/10 transition-all duration-300"
                        title="Call"
                    >
                        <Phone size={18} />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="p-2.5 rounded-xl bg-slate-800/50 text-slate-400 hover:text-tech-cyan hover:bg-tech-cyan/10 transition-all duration-300"
                        title="Email"
                    >
                        <Mail size={18} />
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-800/50 text-slate-400 hover:text-tech-cyan hover:bg-tech-cyan/10 transition-all duration-300"
                        title="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Coordinators: React.FC = () => {
    const coordinators = [
        {
            name: "Syed Aejaz Ahmed",
            role: "President",
            phone: "7338864970",
            email: "syed.aejaz.ahmed2006@gmail.com",
            linkedin: "https://www.linkedin.com/in/aejazahmed2006/",
            image: "https://media.licdn.com/dms/image/v2/D5603AQF0OVHh58uOjg/profile-displayphoto-scale_400_400/B56ZmEDj5mKEAg-/0/1758857150600?e=1769040000&v=beta&t=7KDQrWJ91gC_45T5CGNIaTptJOwRViiYXWoqcJwN45o"
        },
        {
            name: "Nowrin Akkka",
            role: "Event Coordinator",
            phone: "8807527817",
            email: "nowrinbegum19@gmail.com",
            linkedin: "https://www.linkedin.com/in/nowrin-begum/",
            image: "https://media.licdn.com/dms/image/v2/D4D35AQGgZIE2LhQ_hQ/profile-framedphoto-shrink_400_400/B4DZl3JQGmJQAc-/0/1758640538570?e=1768190400&v=beta&t=NYpGaulwBpnyjhYtZ4PpONTZWNdbAjtZaQqI3vqThDs"
        },
        {
            name: "Shahid Ahamed S",
            role: "Coordinator",
            phone: "8489079317",
            email: "shahidahamed3214@gmail.com",
            linkedin: "https://www.linkedin.com/in/shahid-ahamed-s-855ab2295/",
            image: "https://media.licdn.com/dms/image/v2/D5603AQFwOmBgs8eRXA/profile-displayphoto-scale_400_400/B56ZgmEKyHG0Ak-/0/1752985286149?e=1769040000&v=beta&t=XLqNlm3Tl1WwXvdz0VjiVr7plJ1x3QRIb5KRxZAJfMQ"
        },
        {
            name: "Srinithi P",
            role: "Coordinator",
            phone: "6383457387",
            email: "srinithi7788@gmail.com",
            linkedin: "https://www.linkedin.com/in/srinithi-p-75729b295/",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGvHrorU-h0xQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692371413439?e=1769040000&v=beta&t=hdWKTMh166hA3IN1-EW04HhwqvQphCrEqNIk0sO3JyI"
        }
    ];

    return (
        <section id="coordinators" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Need Help?</h2>
                    <h3 className="text-4xl font-bold text-white mb-4">Have <span className="text-tech-purple">Questions?</span></h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our team is here to support you throughout the hackathon. Feel free to reach out to any of our coordinators.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coordinators.map((coord, index) => (
                        <CoordinatorCard key={index} {...coord} />
                    ))}
                </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Coordinators;
