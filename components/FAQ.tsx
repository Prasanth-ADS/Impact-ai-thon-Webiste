import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      emoji: "💸",
      peekingEmoji: "🤑",
      question: "Is there an registration fee?",
      answer: "Nope! This hackathon is completely free to enter. Just bring your enthusiasm and creativity!"
    },
    {
      emoji: "⏰",
      peekingEmoji: "⌛",
      question: "How long is the hackathon?",
      answer: "24 hours! That's 24 hours to turn caffeine into code, bugs into features, and sleep deprivation into innovation. Don't worry, we provide energy drinks!"
    },
    {
      emoji: "💻",
      peekingEmoji: "🎒",
      question: "What should I bring to the hackathon?",
      answer: "Just your laptop, charger, and an unhealthy amount of ambition! We'll provide WiFi, food, and moral support (results may vary on the last one)."
    },
    {
      emoji: "👥",
      peekingEmoji: "🤝",
      question: "Can I participate alone?",
      answer: "Sorry, but teamwork makes the dream work! Solo participation isn't allowed. You'll need to form a team of 1–3 members. Don't worry, we'll help you find teammates if needed."
    },
    {
      emoji: "🌟",
      peekingEmoji: "🌱",
      question: "I'm a beginner. Can I still participate?",
      answer: "Yes! We believe in equal opportunity chaos. Whether you're a coding newbie or a student who remembers when HTML was revolutionary, everyone's welcome! This hackathon is designed specifically for students."
    },
    {
      emoji: "😴",
      peekingEmoji: "🛌",
      question: "Can I sleep during the hackathon?",
      answer: "Absolutely! Sleeping is optional but highly discouraged by your future self. We have designated quiet zones for power naps between your coffee-induced coding sessions."
    },
    {
      emoji: "🍕",
      peekingEmoji: "🍔",
      question: "Will food be provided?",
      answer: "Absolutely! We provide breakfast, lunch, and dinner, plus energy drinks and snacks throughout the event. If you have dietary restrictions, let us know! We promise the food won't judge your code quality."
    },
    {
      emoji: "🏆",
      peekingEmoji: "🥇",
      question: "What can I win?",
      answer: "Amazing prizes worth ₹1,00,000+ plus networking opportunities, and the eternal bragging rights of surviving 24 hours of coding! You might actually build something amazing too."
    },
    {
      emoji: "🆘",
      peekingEmoji: "🐛",
      question: "What if my code breaks at 3 AM?",
      answer: "Git is your best friend! We also have mentors available 24/7 (they run on the same caffeine as you) to help debug your code and your life choices."
    },
    {
      emoji: "🛠",
      peekingEmoji: "⚙️",
      question: "What technologies can I use?",
      answer: "Any programming language, framework, or tool you want! Python, JavaScript, React, Flutter, or even COBOL if you're feeling retro. Just make it work (somehow)."
    },
    {
      emoji: "🚀",
      peekingEmoji: "💡",
      question: "Help! I have no idea what to build!",
      answer: "Don't panic! Every great project starts as a mess. Focus on building something functional first, then make it pretty. Remember: working ugly code beats beautiful broken code!"
    },
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
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col gap-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative group">
              {/* Peeking Emoji */}
              <div
                className={`absolute -top-3 text-2xl z-0 transform transition-transform duration-300 pointer-events-none filter drop-shadow-lg
                  ${isEven ? '-left-2' : '-right-2'}
                  ${isOpen
                    ? `translate-y-[-5px] ${isEven ? 'rotate-[-10deg]' : 'rotate-[10deg]'}`
                    : `group-hover:translate-y-[-2px] ${isEven ? 'group-hover:rotate-[10deg]' : 'group-hover:rotate-[-10deg]'}`
                  }`}
              >
                {faq.peekingEmoji}
              </div>

              {/* Main FAQ Card */}
              <div
                className={`relative z-10 rounded-full border transition-all duration-300 ease-in-out bg-slate-900 overflow-hidden 
                  ${isOpen ? 'border-tech-cyan/50 shadow-lg shadow-tech-cyan/10 rounded-2xl' : 'border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-8 py-5 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center flex-grow mr-4">
                    <span className={`font-medium text-lg md:text-xl transition-colors ${isOpen ? 'text-tech-cyan' : 'text-slate-200'}`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-tech-cyan' : 'rotate-0 text-slate-400'}`}>
                    <Plus size={24} />
                  </div>
                </button>

                {/* Answer Panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 text-slate-400 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;