import React, { useState, useEffect } from "react";
import { Mail, Download, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React Native Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setTextIndex(prev => (prev + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:aniketbedwal90@gmail.com?subject=Let's Connect!&body=Hi Aniket, I'd love to discuss opportunities with you!";
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-48 pb-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Content aligned like Work Experience */}
        <div className={`flex flex-col md:flex-row items-start gap-12`}>
          
          {/* Left Column */}
          <div className={`md:w-3/5 flex flex-col items-start space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Aniket
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-10 md:h-14 flex items-center">
              <span className="text-xl md:text-2xl font-semibold text-gray-300">
                Building{' '}
                <span className="text-amber-400 font-bold relative">
                  <span className="inline-block animate-fade-in-up" key={textIndex}>
                    {roles[textIndex]}
                  </span>
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Second Year Computer Science and Engineering (AI) Student from{' '}
              <span className="text-amber-400 font-semibold">Pune, India</span>. 
              Passionate about crafting efficient, innovative web solutions with React Native and modern technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handleEmailClick}
                className="group flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Get In Touch</span>
              </button>

              <a 
                href="" 
                download
                className="group flex items-center space-x-3 border-2 border-gray-600 hover:border-amber-400 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-amber-400/10"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
              {[
                {icon: Github, href:"https://github.com/anikett35", label:"GitHub"}, 
                {icon: Linkedin, href:"https://www.linkedin.com/in/aniket-bedwal/", label:"LinkedIn"}, 
              ].map(({icon: Icon, href, label}) => (
                <a key={label} href={href} className="text-gray-400 hover:text-amber-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>

          </div>

          {/* Right Column (optional for symmetry) */}
          <div className="md:w-2/5"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="text-gray-400 hover:text-amber-400 transition-colors duration-300" aria-label="Scroll to next section">
            <ChevronDown size={32} />
          </button>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {0%, 100% {transform: translateY(0);} 50% {transform: translateY(-10px);} }
        @keyframes fade-in-up {0% {opacity:0; transform: translateY(20px);} 100% {opacity:1; transform: translateY(0);} }
        .animate-float {animation: float 6s ease-in-out infinite;}
        .animate-fade-in-up {animation: fade-in-up 0.5s ease-out;}
      `}</style>
    </section>
  );
};

export default Home;
