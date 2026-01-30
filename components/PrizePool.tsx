import React from 'react';
import LiquidEther from './LiquidEther';
import { Trophy, Lock, AlertTriangle } from 'lucide-react';

const PrizePool: React.FC = () => {
  const [passcode, setPasscode] = React.useState(Array(9).fill('')); // 9 digits for 0406@0709
  // Keep visual-only error state just for effect if needed, or remove. 
  // Let's keep basic input handling for the visual effect of typing.
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);

    // Auto-focus next input
    if (value && index < 8) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !passcode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <section id="prizes" className="py-24 bg-[#080c16]/90 backdrop-blur-sm relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <LiquidEther
          colors={['#300344', '#7372df', '#e684cc']}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="w-full relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Trophy size={16} className="text-yellow-500 mr-2" />
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">Secret Vault</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              CLASSIFIED ACCESS
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Authorized personnel only. Enter the secure access code to proceed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`bg-[#050a14]/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-500`}>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                  <Lock size={48} className={`text-red-500 relative z-10`} />
                </div>

                <h3 className="text-2xl font-black text-white mb-2 tracking-wider uppercase font-mono">
                  System Locked
                </h3>
                <div className="h-6 mb-8">
                  <p className={`text-red-400 font-mono text-xs md:text-sm tracking-widest transition-opacity opacity-100`}>
                    ENTER ACCESS CODE (v2.0)
                  </p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-8">
                  {passcode.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={el => inputRefs.current[idx] = el}
                      type="password"
                      autoComplete="off"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      className={`w-8 h-10 md:w-10 md:h-14 bg-black/60 border-2 rounded-lg text-center text-lg md:text-2xl font-bold font-mono text-white focus:outline-none focus:border-tech-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all border-slate-700`}
                    />
                  ))}
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-3 md:p-4 backdrop-blur-md max-w-md w-full">
                  <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-1">
                    <AlertTriangle size={14} />
                    <span className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Secure Area</span>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm">
                    Multiple failed attempts will be logged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;