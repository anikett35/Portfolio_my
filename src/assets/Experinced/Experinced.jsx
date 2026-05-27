import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const WorkExperience = () => {

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer Intern",
      company: "Innovitica Pvt. Ltd",
      duration: "February 2026 - Present",
      type: "Remote",
      points: [
        <>Developed full-stack web applications using <span className="font-bold text-[#c4962a]">React, Node.js, Express, and MongoDB</span>.</>,
        <>Built <span className="font-bold text-[#c4962a]">REST APIs</span> to enable communication between frontend and backend services.</>,
        <>Designed responsive UI components using <span className="font-bold text-[#c4962a]">Tailwind CSS</span> for improved usability.</>,
      ],
    },
    {
      id: 2,
      role: "Content Moderator Intern",
      company: "Innovitica Pvt. Ltd",
      duration: "January 2025 - August 2025",
      type: "Remote • New Delhi, India",
      points: [
        <>Managed and updated website content using <span className="font-bold text-[#c4962a]">WordPress CMS</span>.</>,
        <>Reviewed digital content to maintain <span className="font-bold text-[#c4962a]">platform quality standards</span>.</>,
        <>Applied <span className="font-bold text-[#c4962a]">SEO practices</span> to improve search visibility and website traffic.</>,
      ],
    },
    {
      id: 3,
      role: "Full-Stack Developer Intern",
      company: "Astraeus Next Gen",
      duration: "January 2025 - April 2025",
      type: "Remote • Pune, India",
      points: [
        <>Developed responsive web pages using <span className="font-bold text-[#c4962a]">React, HTML, and Tailwind CSS</span>.</>,
        <>Integrated frontend components with <span className="font-bold text-[#c4962a]">backend APIs</span>.</>,
        <>Used <span className="font-bold text-[#c4962a]">Git and GitHub</span> for version control and collaboration.</>,
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Parchment Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Candle Glow */}
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-15 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="w-8 h-8 text-[#c4962a]" />
          <h2
            className="text-4xl font-black text-[#c4962a] tracking-wide"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Work Experience
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-transparent" />
        </div>

        {/* Timeline - Ancient Scroll Style */}
        <div className="relative border-l-4 border-[#c4962a] pl-12 md:pl-16 space-y-16">
          {/* Decorative Top Cap */}
          <div className="absolute -top-2 -left-[13px] w-6 h-6 bg-gradient-to-br from-[#c4962a] to-[#8b6914] rotate-45 border-2 border-[#ffd700] shadow-[0_0_15px_rgba(196,150,42,0.5)] animate-pulse-glow" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group transition-all duration-500"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[55px] md:-left-[59px] top-1 w-6 h-6 bg-gradient-to-br from-[#c4962a] to-[#ffd700] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(196,150,42,0.6)] group-hover:scale-125 transition-transform duration-300 animate-marker-pulse" />

              {/* Connection Line Glow */}
              <div className="absolute -left-[46px] md:-left-[50px] top-7 w-1 h-full bg-gradient-to-b from-[#c4962a] to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Content Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 border-2 border-[#c4962a]/30 hover:border-[#c4962a] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(196,150,42,0.3)] backdrop-blur-sm transform hover:translate-x-2">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />

                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4962a]/0 to-[#c4962a]/0 group-hover:from-[#c4962a]/5 group-hover:to-[#c4962a]/10 transition-all duration-500" />

                {/* Header */}
                <div className="relative mb-6 border-b-2 border-[#c4962a]/20 pb-4">
                  <h3
                    className="text-xl md:text-2xl font-black text-[#c4962a] mb-2 group-hover:text-[#ffd700] transition-colors duration-300"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-base md:text-lg font-bold text-[#d4d4d4]"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2">
                    <p
                      className="text-sm text-[#8b8b8b] tracking-wider"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {exp.duration}
                    </p>
                    {exp.type && (
                      <>
                        <div className="w-1 h-1 bg-[#c4962a] rounded-full animate-pulse" />
                        <span
                          className="text-sm text-[#c4962a] font-bold tracking-wider uppercase"
                          style={{ fontFamily: "Cinzel, serif" }}
                        >
                          {exp.type}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#c4962a] to-transparent" />
                  <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a] animate-spin-slow" />
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#c4962a] to-transparent" />
                </div>

                {/* Points */}
                <ul className="relative space-y-3 md:space-y-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 md:gap-4 text-[#d4d4d4] text-sm md:text-base leading-relaxed group/item hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      <span className="text-[#c4962a] text-lg md:text-xl mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        ⚔
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Decorative Bottom Cap */}
          <div className="absolute -bottom-2 -left-[13px] w-6 h-6 bg-gradient-to-br from-[#c4962a] to-[#8b6914] rotate-45 border-2 border-[#ffd700] shadow-[0_0_15px_rgba(196,150,42,0.5)] animate-pulse-glow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(196, 150, 42, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(196, 150, 42, 0.8);
          }
        }

        @keyframes marker-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(196, 150, 42, 0.6);
          }
          50% {
            box-shadow: 0 0 30px rgba(196, 150, 42, 0.9);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-marker-pulse {
          animation: marker-pulse 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;
