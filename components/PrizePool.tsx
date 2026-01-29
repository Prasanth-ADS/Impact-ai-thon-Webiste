import React from 'react';
import LiquidEther from './LiquidEther';
import { Trophy, Medal, Award, Crown, Zap, Code2, Star, Gift, Lock, AlertTriangle, Send } from 'lucide-react';

const PrizePool: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [passcode, setPasscode] = React.useState(Array(9).fill('')); // Increased to 9 for 0406@0709
  const [error, setError] = React.useState(false);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  // Form State
  const [formData, setFormData] = React.useState({
    name: '',
    team_name: '',
    mobile: '',
    email: '',
    college: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const verifyPasscode = async (code: string) => {
    setIsVerifying(true);
    // Client-side verification for immediate cross-device support
    const correctCode = '0406@0709';

    setTimeout(() => {
      if (code === correctCode) {
        setIsUnlocked(true);
      } else {
        setError(true);
        setTimeout(() => {
          setPasscode(Array(9).fill(''));
          inputRefs.current[0]?.focus();
          setError(false);
        }, 800);
      }
      setIsVerifying(false);
    }, 500);
  };

  const handleInputChange = (index: number, value: string) => {
    if (isVerifying) return;

    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
    setError(false);

    // Auto-focus next input
    if (value && index < 8) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check code when full
    if (newPasscode.every(digit => digit !== '')) {
      const fullCode = newPasscode.join('');
      verifyPasscode(fullCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !passcode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/winners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch (err) {
      console.error("Submission failed", err);
      // Fallback for demo if backend isn't running perfectly for user yet
      // setSubmissionStatus('success'); // UNCOMMENT IF testing without backend
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
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
              {isUnlocked ? "WINNER REGISTRATION" : "CLASSIFIED ACCESS"}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              {isUnlocked ? "Enter your details to claim your victory status." : "Authorized personnel only. Enter the secure access code to proceed."}
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
                    {isVerifying ? "Verifying Access..." : "System Locked"}
                  </h3>
                  <div className="h-6 mb-8">
                    <p className={`text-red-400 font-mono text-xs md:text-sm tracking-widest transition-opacity ${isVerifying ? 'opacity-0' : 'opacity-100'}`}>
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
                        disabled={isVerifying}
                        onChange={(e) => handleInputChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className={`w-8 h-10 md:w-10 md:h-14 bg-black/60 border-2 rounded-lg text-center text-lg md:text-2xl font-bold font-mono text-white focus:outline-none focus:border-tech-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all ${error ? 'border-red-500 text-red-500' : 'border-slate-700'} ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
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
            ) : (
              <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-tech-cyan/30 rounded-2xl p-8 md:p-12 relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                {submissionStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Registration Confirmed</h3>
                    <p className="text-slate-300">Your details have been securely recorded in the vault database. Good luck!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-slate-400 text-sm font-mono uppercase mb-2">Participant Name</label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm font-mono uppercase mb-2">Team Name</label>
                        <input
                          name="team_name"
                          required
                          value={formData.team_name}
                          onChange={handleFormChange}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                          placeholder="Cyber Alphas"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-400 text-sm font-mono uppercase mb-2">Mobile Number</label>
                          <input
                            name="mobile"
                            required
                            type="tel"
                            value={formData.mobile}
                            onChange={handleFormChange}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                            placeholder="+91 9876543210"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-sm font-mono uppercase mb-2">Email Address</label>
                          <input
                            name="email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm font-mono uppercase mb-2">College Name</label>
                        <input
                          name="college"
                          required
                          value={formData.college}
                          onChange={handleFormChange}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                          placeholder="Institute of Technology"
                        />
                      </div>
                    </div>

                    {submissionStatus === 'error' && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                        Failed to submit details. Please check connection.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-tech-cyan hover:bg-cyan-400 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Registering...' : (
                        <>
                          Confirm Registration <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;