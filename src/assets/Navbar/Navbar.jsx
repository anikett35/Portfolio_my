import React, { useState, useEffect } from "react";
import { X, Menu, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
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
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleLinkClick = (href) => {
    setMenu(false);
    setActiveSection(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-b border-gray-700/30' 
        : 'bg-[#0f172a]' // unified fresh background
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-20">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <span className="text-xl font-bold tracking-wide cursor-pointer bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent hover:from-amber-300 hover:to-orange-400 transition-all duration-300">
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
                  className={`relative text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group ${
                    activeSection === link.href ? 'text-amber-400' : ''
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

        

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="menu-toggle p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-800"
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
        <div className="bg-[#0f172a]/95 backdrop-blur-md border-t border-gray-700/30 px-6 py-4">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t border-gray-700/30">
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
              onClick={() => setMenu(false)}
            >
              <span>Get In Touch</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
