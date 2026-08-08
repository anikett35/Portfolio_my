import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skill", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      let current = "home";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "py-4 bg-surface/50 backdrop-blur-xl border-b border-border shadow-glass" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo area */}
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 ease-out group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-medium text-lg text-text tracking-wide transition-colors duration-300 ease-out group-hover:text-primary">
            Aniket.
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 bg-surface/30 backdrop-blur-md border border-border px-2 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative block px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-out rounded-full ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full z-0 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-white/5"
                      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:block px-5 py-2 text-sm font-medium text-white bg-primary/90 border border-primary/50 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 ease-out hover:bg-primary hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-[1px]"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-text p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-border p-6 md:hidden shadow-glass"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      activeSection === link.id
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;