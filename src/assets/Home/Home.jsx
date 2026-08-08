import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import HeroConstellation from "../../components/HeroConstellation";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 w-full text-center md:text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-eyebrow">Available for new opportunities</span>
            </motion.div>

            {/* Headline with Mask Reveal */}
            <div className="overflow-hidden pb-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                className="text-h1 text-text mb-2"
              >
                Engineering
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.1 }}
                className="text-h1 mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Digital Reality.
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
              className="text-body text-text-secondary max-w-xl mx-auto md:mx-0 mb-10"
            >
              Hi, I'm <strong className="text-white font-medium">Aniket Bedwal</strong>. A full-stack developer focused on building scalable, performant, and beautifully designed web applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="group w-full sm:w-auto px-6 py-3 bg-white text-background rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ease-out" />
              </a>
              <a
                href="/Aniket_Bedwal_VIT.pdf"
                target="_blank"
                className="group w-full sm:w-auto px-6 py-3 bg-card border border-border text-text rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                <FileText size={18} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
            className="hidden md:flex flex-1 w-full justify-center relative"
          >
            <div className="relative w-[320px] h-[320px] mx-auto">
              {/* Constellation Wrapper - strictly contained */}
              <div className="absolute inset-0 z-0 w-[320px] h-[320px] rounded-full overflow-hidden">
                <HeroConstellation />
              </div>
              
              <img 
                src="/logo.png" 
                alt="Aniket Bedwal" 
                className="relative z-10 w-full h-full rounded-full object-cover border border-border/50 shadow-glow"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=Aniket+Bedwal&background=0A0E1A&color=3B82F6&size=512";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
