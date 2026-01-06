import React, { useState } from 'react';
import {
  Plus,
  Minus,
  MapPin,
  Calendar,
  Users,
  Share2,
  Wrench,
  Award,
  ShieldCheck,
  Utensils,
  Laptop,
  MessageSquare,
  Linkedin,
  Phone,
  Mail
} from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      icon: MapPin,
      question: "What is the mode of Impact AI Thon 2026?",
      answer: "Impact AI Thon 2026 will be conducted offline, and all participants are required to attend in person at the venue."
    },
    {
      icon: Calendar,
      question: "What is the registration deadline?",
      answer: "The last date for registration is 18 February 2026. Late registrations will not be accepted."
    },
    {
      icon: Users,
      question: "What is the team size?",
      answer: "Teams may consist of a minimum of 1 and a maximum of 3 members."
    },
    {
      icon: Share2,
      question: "Are inter-college or inter-department teams allowed?",
      answer: "Yes, teams with members from different colleges or departments are permitted."
    },
    {
      icon: Wrench,
      question: "What facilities are provided by the organizers?",
      answer: "The organizers will provide essential infrastructure for coding, including internet connectivity."
    },
    {
      icon: Award,
      question: "Will participants receive certificates?",
      answer: "Yes, participation certificates will be issued to all eligible participants."
    },
    {
      icon: ShieldCheck,
      question: "What code of conduct must participants follow?",
      answer: "Participants must maintain discipline, respect fellow participants and organizers, and avoid damage to venue property."
    },
    {
      icon: Utensils,
      question: "Are accommodation and food provided?",
      answer: "Accommodation will not be provided. However, food and refreshments will be arranged for participants."
    },
    {
      icon: Laptop,
      question: "What should participants bring?",
      answer: "Participants must bring their own laptops, chargers, and any tools required for the hackathon."
    },
    {
      icon: MessageSquare,
      question: "Whom should we contact for queries?",
      answer: "You can reach out to us via the following channels:"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.question === "Whom should we contact for queries?"
          ? "LinkedIn: ninjasndias | Phone: 434234234 | Email: dsc@gmail.com"
          : faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-[#050a14]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Common Questions</h2>
          <h3 className="text-4xl font-bold text-white">Frequently Asked <span className="text-tech-purple">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-tech-card/50 border ${isOpen ? 'border-tech-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'border-slate-800'} rounded-xl overflow-hidden transition-all duration-300 group`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    {Icon && (
                      <div className={`p-2 rounded-lg ${isOpen ? 'bg-tech-cyan/20 text-tech-cyan' : 'bg-slate-800 text-slate-500'} group-hover:text-tech-cyan transition-colors`}>
                        <Icon size={20} />
                      </div>
                    )}
                    <span className={`font-bold text-lg md:text-xl ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <Minus className="text-tech-cyan flex-shrink-0" />
                  ) : (
                    <Plus className="text-slate-500 flex-shrink-0 group-hover:text-tech-cyan transition-colors" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/30 mt-2">
                    {index === 9 ? (
                      <div className="space-y-3 mt-4">
                        <a
                          href="https://www.linkedin.com/in/aejazahmed2006/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-slate-300 hover:text-tech-cyan transition-colors group/link"
                        >
                          <Linkedin size={18} className="text-tech-cyan group-hover/link:scale-110 transition-transform" />
                          <span className="font-mono">Syed Aejaz Ahmed</span>
                        </a>
                        <div className="flex items-center space-x-3 text-slate-300">
                          <Phone size={18} className="text-tech-cyan" />
                          <span className="font-mono">8940764888</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-300">
                          <Mail size={18} className="text-tech-cyan" />
                          <span className="font-mono">dsc@gmail.com</span>
                        </div>
                      </div>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;