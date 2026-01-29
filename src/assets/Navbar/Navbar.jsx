import React, { useState, useEffect } from "react";
import { X, Menu, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menu]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skill', label: 'Skill' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleLinkClick = (href) => {
    setMenu(false);
    setActiveSection(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(196,150,42,0.2)] border-b-2 border-[#c4962a]/30' 
        : 'bg-[#0a0a0a] border-b-2 border-[#c4962a]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-20">
        <div className="flex justify-between items-center">
          {/* Brand Name with Shield */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#c4962a] via-[#ffd700] to-[#8b6914] flex items-center justify-center border-2 border-[#ffd700] shadow-[0_0_15px_rgba(196,150,42,0.4)]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}>
              <span className="text-black font-black text-sm" style={{ fontFamily: 'Cinzel, serif' }}>AB</span>
            </div>
            <span className="text-xl font-black tracking-wide cursor-pointer bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-[#c4962a] bg-clip-text text-transparent hover:from-[#ffd700] hover:to-[#c4962a] transition-all duration-300 animate-shimmer bg-[length:200%_auto]"
              style={{ fontFamily: 'Cinzel, serif' }}>
              Aniket Bedwal
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative text-[#d4d4d4] hover:text-[#c4962a] transition-all duration-300 text-sm font-bold tracking-wider uppercase group ${
                    activeSection === link.href ? 'text-[#c4962a]' : ''
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#c4962a] to-[#ffd700] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(196,150,42,0.6)]"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="menu-toggle p-2 text-[#c4962a] hover:text-[#ffd700] transition-colors duration-300 rounded-lg hover:bg-[#c4962a]/10 border border-[#c4962a]"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mobile-menu transition-all duration-300 overflow-hidden ${
        menu 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'
      }`}>
        <div className="bg-[#0a0a0a]/98 backdrop-blur-md border-t-2 border-[#c4962a]/30 px-6 py-4 shadow-[0_4px_20px_rgba(196,150,42,0.3)]">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block px-4 py-3 text-[#d4d4d4] hover:text-[#c4962a] hover:bg-[#c4962a]/10 rounded-lg transition-all duration-300 transform hover:translate-x-2 font-bold tracking-wider border border-transparent hover:border-[#c4962a]/30"
                  style={{ animationDelay: `${index * 50}ms`, fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t-2 border-[#c4962a]/30">
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-[#c4962a] to-[#8b6914] hover:from-[#ffd700] hover:to-[#c4962a] text-black text-sm font-bold rounded-lg transition-all duration-300 border border-[#ffd700] shadow-[0_0_15px_rgba(196,150,42,0.3)]"
              onClick={() => setMenu(false)}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <span>SEND RAVEN</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;