import React, { useState } from 'react';
import { ScheduleItem } from '../types';
import { Clock, MapPin, ChevronDown, ChevronUp, Zap, Coffee, Code, Mic, Award } from 'lucide-react';

const Schedule: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scheduleData: ScheduleItem[] = [
    {
      date: 'Day 1',
      time: '09:00 AM',
      title: 'Opening Ceremony',
      description: 'Kickoff, keynote speakers, and track announcements.',
      location: 'Main Stage',
      category: 'Keynote',
      details: 'Join us for the grand opening! We will reveal the secret themes, introduce the judges, and have a special keynote from the CTO of FutureLabs.'
    },
    {
      date: 'Day 1',
      time: '11:00 AM',
      title: 'Hacking Begins',
      description: 'Teams form and start building their projects.',
      location: 'Hackathon Centre',
      category: 'Hacking',
      details: 'The 24-hour countdown begins! Finalize your teams and claim your desk space. Mentors will be circulating to help with initial brainstorming.'
    },
    {
      date: 'Day 1',
      time: '02:00 PM',
      title: 'Workshop: AI APIs',
      description: 'Deep dive into integrating Gemini and other tools.',
      location: 'Workshop Room 1',
      category: 'Workshop',
      details: 'A hands-on session led by Google Developer Experts. Learn how to implement multimodal AI capabilities into your hackathon project.'
    },
    {
      date: 'Day 2',
      time: '12:00 PM',
      title: 'Mid-Hack Checkpoint',
      description: 'Mentors review progress and offer guidance.',
      location: 'Mentorship Lounge',
      category: 'Social',
      details: 'Grab some lunch and get feedback. This is a crucial time to pivot if necessary. Energy drinks will be restocked!'
    },
    {
      date: 'Day 3',
      time: '09:00 AM',
      title: 'Code Freeze',
      description: 'Submission deadline. No more commits allowed.',
      location: 'DevPost',
      category: 'Deadline',
      details: 'Hands off keyboards! Ensure your project is submitted to the platform with a demo video and public repository link.'
    },
    {
      date: 'Day 3',
      time: '01:00 PM',
      title: 'Presentations & Awards',
      description: 'Top 10 teams demo to judges.',
      location: 'Main Stage',
      category: 'Keynote',
      details: 'The moment of truth. Finalists will present live on stage. Winners for all tracks and the Grand Prize will be announced.'
    },
  ];

  const getIcon = (category?: string) => {
    switch (category) {
      case 'Keynote': return <Mic size={18} />;
      case 'Hacking': return <Code size={18} />;
      case 'Workshop': return <Zap size={18} />;
      case 'Social': return <Coffee size={18} />;
      case 'Deadline': return <Award size={18} />;
      default: return <Clock size={18} />;
    }
  };

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="schedule" className="py-24 bg-tech-dark/90 backdrop-blur-sm relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2 uppercase">Timeline</h2>
          <h3 className="text-4xl font-bold text-white">Event <span className="text-tech-purple">Schedule</span></h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent md:-ml-[1px]"></div>

          <div className="space-y-12">
            {scheduleData.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center w-full group`}
                >

                  {/* Content Box */}
                  <div
                    onClick={() => toggleItem(idx)}
                    className={`
                      w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 
                      p-6 bg-tech-card border rounded-xl cursor-pointer
                      transition-all duration-300 ease-in-out
                      ${isExpanded
                        ? 'border-tech-cyan shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-slate-800'
                        : 'border-slate-800 hover:border-slate-600 hover:bg-slate-800/50'
                      }
                    `}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`
                          flex items-center space-x-1 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider
                          ${isExpanded ? 'bg-tech-cyan text-black' : 'bg-slate-800 text-slate-400'}
                        `}>
                          <Clock size={12} className="mr-1" />
                          {item.time}
                        </span>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">{item.date}</span>
                      </div>
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-tech-cyan' : 'text-slate-500'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    <h4 className={`text-xl font-bold mb-2 transition-colors ${isExpanded ? 'text-white' : 'text-slate-200'}`}>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-2">{item.description}</p>

                    {/* Expanded Details */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${isExpanded ? 'max-h-40 opacity-100 mt-4 pt-4 border-t border-slate-700/50' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className="flex flex-col space-y-3">
                        {item.location && (
                          <div className="flex items-center text-sm text-tech-purple">
                            <MapPin size={16} className="mr-2" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.details}
                        </p>
                        <div className="flex items-center text-xs text-slate-500 uppercase tracking-wider font-mono">
                          <span className="mr-2 p-1 rounded-full bg-slate-700/50">{getIcon(item.category)}</span>
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className={`
                      absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 md:top-1/2
                      w-4 h-4 rounded-full z-10 border-2 transition-all duration-300
                      ${isExpanded
                        ? 'bg-tech-cyan border-white shadow-[0_0_15px_rgba(6,182,212,1)] scale-125'
                        : 'bg-tech-dark border-tech-cyan group-hover:border-white'
                      }
                    `}
                  ></div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;