import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel border-b border-white/5 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer no-underline group"
          onClick={handleLogoClick}
        >
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden border border-tech-cyan/20 group-hover:border-tech-cyan/50 transition-colors bg-white/5 p-0.5">
            <img
              src="/LOGO.jpeg"
              alt="Impact AI Thon Logo"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <span className="text-xl font-bold font-mono tracking-tighter text-white group-hover:text-tech-cyan transition-colors">
            IMPACT-AI-THON
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-tech-cyan transition-colors uppercase tracking-widest cursor-pointer no-underline"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-tech-electric/10 border border-tech-electric text-tech-electric font-bold rounded hover:bg-tech-electric hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer no-underline"
          >
            REGISTER_NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 border-t border-b border-slate-800">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className="text-lg font-medium text-slate-300 hover:text-tech-cyan cursor-pointer no-underline"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-tech-electric text-black font-bold rounded text-center cursor-pointer no-underline"
            >
              REGISTER_NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;