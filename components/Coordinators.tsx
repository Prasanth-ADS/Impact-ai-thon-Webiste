import React from 'react';
import { Phone, Linkedin } from 'lucide-react';

interface CoordinatorProps {
    name: string;
    role: string;
    phone: string;
    linkedin?: string;
    image?: string;
    imagePosition?: string;
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, role, phone, linkedin, image, imagePosition = "object-center" }) => {
    return (
        <div className="group relative bg-[#0a1122]/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 transition-all duration-500 hover:border-tech-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden h-full flex flex-col">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-tech-cyan/5 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:bg-tech-cyan/10 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                <div className="mb-4 relative">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 p-1 group-hover:border-tech-cyan/50 transition-all duration-500 overflow-hidden">
                        <img
                            src={image || "/LOGO.jpeg"}
                            alt={name}
                            className={`w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 ${imagePosition}`}
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-tech-cyan rounded-full flex items-center justify-center border-2 border-[#0a1122]">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-tech-cyan transition-colors duration-300">{name}</h4>
                <p className="text-tech-purple font-mono text-xs tracking-wider uppercase mb-4">{role}</p>

                <div className="flex flex-col items-center space-y-2 mb-4 w-full mt-auto">
                    <div className="flex items-center justify-center w-full text-slate-400 hover:text-white transition-colors">
                        <Phone size={14} className="mr-2 text-tech-cyan flex-shrink-0" />
                        <span className="text-sm font-mono">{phone}</span>
                    </div>
                </div>

                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300 group/linkedin mt-2"
                    >
                        <Linkedin size={18} />
                    </a>
                )}
            </div>
        </div>
    );
};

const Coordinators: React.FC = () => {
    const leadCoordinators = [
        {
            name: "Kiruthik",
            role: "Student Coordinator",
            phone: "99405 19002",
            image: "/kiruthik photo.jpeg"
        },
        {
            name: "Naazil",
            role: "Student Coordinator",
            phone: "9444160065",
            image: "/naazil photo.jpeg",
            imagePosition: "object-top"
        }
    ];

    const coordinators = [
        {
            name: "Syed Aejaz Ahmed A",
            role: "Student Coordinator",
            phone: "7338864970",
            linkedin: "https://www.linkedin.com/in/aejazahmed2006/",
            image: "/public/Syed.png"
        },
        {
            name: "Nowrin Begum R",
            role: "Coordinator",
            phone: "8807527817",
            linkedin: "https://www.linkedin.com/in/nowrin-begum/",
            image: "/Nowrin.png"
        },
        {
            name: "Shahid Ahamed S",
            role: "Coordinator",
            phone: "8489079317",
            linkedin: "https://www.linkedin.com/in/shahid-ahamed-s-855ab2295/",
            image: "/Shahidl.jpeg"
        },
        {
            name: "Srinithi P",
            role: "Coordinator",
            phone: "6383457387",
            linkedin: "https://www.linkedin.com/in/srinithi-p-75729b295/",
            image: "/Srinithi photo.jpeg"
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

                {/* Lead Coordinators - Centered */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-4xl mx-auto">
                    {leadCoordinators.map((coord, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-12px)] max-w-sm">
                            <CoordinatorCard {...coord} />
                        </div>
                    ))}
                </div>

                {/* Other Coordinators - Grid */}
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
