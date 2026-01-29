import React from 'react';
import LiquidEther from './LiquidEther';
import { Trophy, Medal, Award, Crown, Zap, Code2, Star, Gift, Lock, AlertTriangle } from 'lucide-react';

const PrizePool: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [passcode, setPasscode] = React.useState(Array(8).fill(''));
  const [error, setError] = React.useState(false);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const verifyPasscode = async (code: string) => {
    setIsVerifying(true);
    // Client-side verification for immediate cross-device support
    // The code is '04@07@09'
    const correctCode = '04@07@09';

    setTimeout(() => {
      if (code === correctCode) {
        setIsUnlocked(true);
      } else {
        setError(true);
        setTimeout(() => {
          setPasscode(Array(8).fill(''));
          inputRefs.current[0]?.focus();
          setError(false);
        }, 800);
      }
      setIsVerifying(false);
    }, 500); // Small delay for UX "process" feel using setTimeout instead of promise
  }
  const handleInputChange = (index: number, value: string) => {
    if (isVerifying) return; // Prevent input during verification

    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
    setError(false);

    // Auto-focus next input
    if (value && index < 7) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check code when full
    if (newPasscode.every(digit => digit !== '') && index === 7) {
      const fullCode = newPasscode.join('');

      verifyPasscode(fullCode);
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
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">Total Rewards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              ₹1,20,000 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">PRIZE POOL</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Compete for cash prizes, venture capital introductions, and enterprise-grade tech stacks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!isUnlocked ? (
              <div className={`bg-[#050a14]/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-500 ${error ? 'animate-shake border-red-500' : ''}`}>

                <div className="flex flex-col items-center justify-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                    <Lock size={48} className={`text-red-500 relative z-10 ${isVerifying ? 'animate-pulse' : ''}`} />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 tracking-wider uppercase font-mono">
                    {isVerifying ? "Verifying Access..." : "Prize Breakdown Locked"}
                  </h3>
                  <div className="h-6 mb-8">
                    <p className={`text-red-400 font-mono text-xs md:text-sm tracking-widest transition-opacity ${isVerifying ? 'opacity-0' : 'opacity-100'}`}>
                      ENTER ACCESS CODE TO REVEAL
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
                        disabled={isVerifying}
                        onChange={(e) => handleInputChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className={`w-8 h-10 md:w-12 md:h-14 bg-black/60 border-2 rounded-lg text-center text-lg md:text-2xl font-bold font-mono text-white focus:outline-none focus:border-tech-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all ${error ? 'border-red-500 text-red-500' : 'border-slate-700'} ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
                      />
                    ))}
                  </div>

                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-3 md:p-4 backdrop-blur-md max-w-md w-full">
                    <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-1">
                      <AlertTriangle size={14} />
                      <span className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Clue</span>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      The code will be shared shortly or you can find the clues hidden within the website.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-700">
                {/* 2nd Prize */}
                <div className="bg-[#0f172a]/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 relative group md:translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 shadow-lg">
                      <span className="text-xl font-bold text-slate-300">2</span>
                    </div>
                  </div>
                  <div className="mt-6 mb-2">
                    <Medal size={40} className="text-slate-300 mx-auto mb-2" />
                    <div className="text-3xl font-black text-white">₹40,000</div>
                    <div className="text-slate-400 text-sm font-bold tracking-widest uppercase">Runner Up</div>
                  </div>
                </div>

                {/* 1st Prize */}
                <div className="bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] border border-yellow-500/50 rounded-2xl p-8 text-center transform hover:scale-110 transition-all duration-300 relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.2)] group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-[#0f172a] shadow-xl">
                      <Crown size={32} className="text-[#0f172a]" />
                    </div>
                  </div>
                  <div className="mt-8 mb-4">
                    <Trophy size={64} className="text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-bounce" />
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">₹50,000</div>
                    <div className="text-yellow-500 text-base font-bold tracking-[0.2em] uppercase mt-2">Champion</div>
                  </div>
                </div>

                {/* 3rd Prize */}
                <div className="bg-[#0f172a]/80 backdrop-blur-md border border-amber-800/50 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 relative group md:translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border-2 border-amber-700 shadow-lg">
                      <span className="text-xl font-bold text-amber-600">3</span>
                    </div>
                  </div>
                  <div className="mt-6 mb-2">
                    <Award size={40} className="text-amber-600 mx-auto mb-2" />
                    <div className="text-3xl font-black text-white">₹30,000</div>
                    <div className="text-amber-600/80 text-sm font-bold tracking-widest uppercase">Second Runner Up</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;