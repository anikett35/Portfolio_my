import React, { useState, useEffect } from "react";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(
      () => setTextIndex((prev) => (prev + 1) % roles.length),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aniketbedwal90@gmail.com?subject=Let's Connect!&body=Hi Aniket, I'd love to discuss opportunities with you!";
  };

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-48 pb-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Medieval Stone Texture Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Torch Fire Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#c4962a] rounded-full blur-[120px] opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-start gap-12`}>
          <div
            className={`md:w-3/5 flex flex-col items-start space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* House Sigil Badge */}
            <div
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#c4962a]/20 to-[#8b6914]/20 px-6 py-3 border-2 border-[#c4962a] backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
              }}
            >
              <div className="w-2 h-2 bg-[#c4962a] rounded-full animate-pulse shadow-[0_0_10px_#c4962a]"></div>
              <span
                className="text-sm font-bold tracking-wider text-[#c4962a] uppercase"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-7xl font-black leading-tight mt-2 tracking-tight"
              style={{
                fontFamily: "Cinzel, serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-[#c4962a] bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Aniket
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-10 md:h-14 flex items-center">
              <span
                className="text-xl md:text-2xl font-semibold text-[#d4d4d4]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Building{" "}
                <span className="text-[#c4962a] font-bold relative">
                  <span
                    className="inline-block animate-fade-in-up"
                    key={textIndex}
                  >
                    {roles[textIndex]}
                  </span>
                </span>
              </span>
            </div>

            {/* Description with Medieval Divider */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
                <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a]" />
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#c4962a] to-transparent" />
              </div>

              <p
                className="text-lg md:text-xl text-[#d4d4d4] leading-relaxed max-w-2xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Second Year Computer Science and Engineering (AI) Student from{" "}
                <span className="text-[#c4962a] font-semibold">
                  Pune, India
                </span>
                . Passionate about crafting efficient, innovative web solutions
                with MERN STACK and modern technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
              <button
                onClick={handleEmailClick}
                className="group relative flex items-center space-x-3 bg-gradient-to-r from-[#c4962a] to-[#8b6914] text-black font-bold px-8 py-4 overflow-hidden shadow-[0_0_20px_rgba(196,150,42,0.3)] hover:shadow-[0_0_30px_rgba(196,150,42,0.5)] transform hover:scale-105 transition-all duration-300 border border-[#ffd700]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300 relative z-10"
                />
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#c4962a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="/aniket-resume.pdf"
                download
                className="group relative flex items-center space-x-3 border-2 border-[#c4962a] text-[#c4962a] hover:text-black font-bold px-8 py-4 transition-all duration-300 hover:bg-[#c4962a] overflow-hidden"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform duration-300 relative z-10"
                />
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

            {/* Social Links with Swords Divider */}
            <div className="flex items-center space-x-6 pt-6">
              <span
                className="text-[#8b8b8b] text-sm tracking-widest uppercase"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Follow:
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#c4962a] to-transparent" />
              {[
                {
                  icon: Github,
                  href: "https://github.com/anikett35",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/aniket-bedwal/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="relative text-[#8b8b8b] hover:text-[#c4962a] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={22} />
                  <div className="absolute -inset-2 bg-[#c4962a] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:w-2/5"></div>
        </div>

        {/* Scroll Indicator - Dragon Wings */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="relative text-[#c4962a] hover:text-[#ffd700] transition-colors duration-300 group"
            aria-label="Scroll to next section"
          >
            <ChevronDown
              size={36}
              className="drop-shadow-[0_0_8px_rgba(196,150,42,0.6)]"
            />
            <div className="absolute inset-0 bg-[#c4962a] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Home;
