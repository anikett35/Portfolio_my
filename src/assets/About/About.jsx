import React, { useState, useEffect } from "react";
import { User, X } from "lucide-react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        id="about"
        className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden"
      >
        {/* Stone Wall Texture */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Torch Glow */}
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-[#c4962a] rounded-full blur-[120px] opacity-10 animate-pulse" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header with Ornamental Line */}
          <div className="flex items-center gap-4 mb-16">
            <User className="w-8 h-8 text-[#c4962a]" />
            <h2 className="text-4xl font-black text-[#c4962a] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
              About Me
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left Content - Manuscript Style */}
            <div className="md:w-1/2 space-y-6 text-lg leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <p className="text-[#d4d4d4] first-letter:text-6xl first-letter:font-bold first-letter:text-[#c4962a] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                My name is <span className="text-[#c4962a] font-bold">Aniket Bedwal</span>, 
                a passionate and self-driven <span className="text-[#c4962a] font-bold">B.Tech</span> student in 
                Computer Science (AI) at <span className="text-[#c4962a] font-bold">VIT Pune</span>. I am determined to make my family proud by contributing meaningfully to the tech industry.
              </p>
              
              <div className="flex items-center gap-4 my-6">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
                <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a]" />
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
              </div>

              <p className="text-[#d4d4d4]">
                I have hands-on experience as a <span className="text-[#c4962a] font-bold">Full-Stack Developer Intern</span> at
                <span className="text-[#c4962a] font-bold"> Astraeus Next Gen</span>, building responsive web applications using 
                <span className="text-[#c4962a] font-bold"> React.js, Tailwind CSS</span>. I also work as a 
                <span className="text-[#c4962a] font-bold"> Content Moderator Intern</span> at
                <span className="text-[#c4962a] font-bold"> Innovitica Pvt. Ltd</span>.
              </p>
              
              <p className="text-[#d4d4d4]">
                My journey is fueled by <span className="text-[#c4962a] font-bold">dedication and consistent effort</span>. I actively participate in hackathons, open-source initiatives, and continuous learning to grow as a professional. I'm always ready to <span className="text-[#c4962a] font-bold">collaborate, innovate, and make an impact</span>.
              </p>
            </div>

            {/* Right Content - Royal Portrait */}
            <div className="md:w-1/2 flex justify-center">
              <div 
                className={`relative group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onClick={() => setIsModalOpen(true)}
              >
                {/* Outer Golden Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#c4962a] via-[#ffd700] to-[#8b6914] opacity-80 blur-lg group-hover:opacity-100 transition-all duration-500" />
                
                {/* Corner Ornaments */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-[#c4962a]" />
                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-[#c4962a]" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-4 border-l-4 border-[#c4962a]" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-[#c4962a]" />

                {/* Image Container */}
                <div className="relative bg-[#1a1a1a] overflow-hidden transform transition-transform duration-500 group-hover:scale-105 border-4 border-[#c4962a]">
                  <img
                    src="/profile-pic.png.jpg"
                    alt="Aniket's Profile"
                    className="w-80 h-[480px] object-cover filter contrast-110 brightness-95"
                  />

                  {/* Inner Shadow Overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] pointer-events-none" />
                  
                  {/* Vignette Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Decorative Plate */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8b6914] via-[#c4962a] to-[#8b6914] px-6 py-2 border-2 border-[#ffd700] shadow-[0_0_20px_rgba(196,150,42,0.4)]">
                  <span className="text-black font-black text-sm tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                    DEVELOPER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-[#c4962a] hover:text-[#ffd700] transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={48} strokeWidth={3} />
          </button>

          {/* Modal Image - Same styling as original */}
          <div 
            className="relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Outer Golden Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#c4962a] via-[#ffd700] to-[#8b6914] opacity-90 blur-xl" />
              
              {/* Corner Ornaments */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-[#c4962a]" />
              <div className="absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 border-[#c4962a]" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 border-[#c4962a]" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-[#c4962a]" />

              {/* Large Image Container */}
              <div className="relative bg-[#1a1a1a] overflow-hidden border-4 border-[#c4962a]">
                <img
                  src="/profile-pic.png.jpg"
                  alt="Aniket's Profile"
                  className="w-[450px] h-[650px] md:w-[500px] md:h-[750px] object-cover filter contrast-110 brightness-95"
                />

                {/* Inner Shadow Overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] pointer-events-none" />
                
                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Decorative Plate */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8b6914] via-[#c4962a] to-[#8b6914] px-8 py-3 border-2 border-[#ffd700] shadow-[0_0_30px_rgba(196,150,42,0.6)]">
                <span className="text-black font-black text-lg tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>
                  DEVELOPER
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  );
};

export default About;