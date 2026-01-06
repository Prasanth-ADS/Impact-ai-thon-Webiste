import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';
import { TimeLeft } from '../types';

const Hero: React.FC = () => {
  // Set target date to February 22, 2026
  const [targetDate] = useState<number>(() => {
    return new Date('2026-02-22T00:00:00').getTime();
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-tech-card border border-tech-cyan/30 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-tech-cyan/5 group-hover:bg-tech-cyan/10 transition-colors"></div>
        <span key={value} className="text-2xl md:text-5xl font-mono font-bold text-white z-10 animate-number-pop">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-slate-400 font-semibold">{label}</span>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 text-tech-purple/20 animate-float hidden lg:block"><Code2 size={64} /></div>
      <div className="absolute bottom-1/4 right-10 text-tech-cyan/20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}><Cpu size={64} /></div>
      <div className="absolute top-1/3 right-1/4 text-white/5 animate-pulse-slow hidden lg:block"><Globe size={128} /></div>


      {/* Main Content - Increased z-index to 20 to sit above background overlays */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-cyan"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase">Registration Open</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 neon-text">
          BUILD THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-purple">
            IMPOSSIBLE
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Join 1,000+ developers, designers, and innovators for 24 hours of code, creativity, and collaboration.
          The future is waiting to be written by you.
        </p>

        {/* Countdown */}
        <div className="flex justify-center flex-wrap mb-16">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-tech-electric text-black font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-white transition-colors duration-300 cursor-pointer inline-flex items-center justify-center"
          >
            <span className="block skew-x-[10deg] flex items-center">
              REGISTER NOW <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <button
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 border border-slate-600 text-white font-bold text-lg rounded-none skew-x-[-10deg] hover:border-tech-purple hover:text-tech-purple transition-colors duration-300 cursor-pointer"
          >
            <span className="block skew-x-[10deg]">
              VIEW SCHEDULE
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade - Added pointer-events-none */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a14] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;