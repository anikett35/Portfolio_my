import React from "react";
import { Code } from "lucide-react";
import { 
  FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaReact, FaBootstrap, FaGit, FaFigma, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiExpress, SiGithub 
} from "react-icons/si";

const Skill = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaHtml5 size={28} />, name: "HTML5", desc: "Markup language for web pages", color: "bg-[#e34c26] text-white" },
        { icon: <FaCss3 size={28} />, name: "CSS3", desc: "Styling language for web design", color: "bg-[#264de4] text-white" },
        { icon: <FaJs size={28} />, name: "JavaScript", desc: "Language of the web", color: "bg-[#f0db4f] text-black" },
        { icon: <FaPython size={28} />, name: "Python", desc: "High-level, versatile programming language", color: "bg-[#306998] text-white" },
        { icon: <FaJava size={28} />, name: "Java", desc: "Popular for enterprise applications", color: "bg-[#5382a1] text-white" },
        { icon: "C++", name: "C++", desc: "Object-oriented programming language", color: "bg-[#00599c] text-white" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <FaReact size={28} />, name: "React", desc: "JavaScript library for UI development", color: "bg-[#61dafb] text-black" },
        { icon: <SiNextdotjs size={28} />, name: "Next.js", desc: "React-based JavaScript framework", color: "bg-black text-white" },
        { icon: <SiTailwindcss size={28} />, name: "Tailwind", desc: "Utility-first CSS framework", color: "bg-[#38bdf8] text-white" },
        { icon: <FaBootstrap size={28} />, name: "Bootstrap", desc: "CSS framework for responsive design", color: "bg-[#7952b3] text-white" },
        { icon: <FaNodeJs size={28} />, name: "Node.js", desc: "JavaScript runtime for backend development", color: "bg-[#68a063] text-white" },
        { icon: <SiExpress size={28} />, name: "Express", desc: "Minimalist Node.js framework", color: "bg-[#303030] text-white" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMongodb size={28} />, name: "MongoDB", desc: "NoSQL document-based database", color: "bg-[#47a248] text-white" },
        { icon: <SiMysql size={28} />, name: "MySQL", desc: "Relational database management system", color: "bg-[#00758f] text-white" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { icon: <FaGit size={28} />, name: "Git", desc: "Version control system", color: "bg-[#f05032] text-white" },
        { icon: <SiGithub size={28} />, name: "GitHub", desc: "Code hosting platform", color: "bg-[#181717] text-white" },
        { icon: <FaFigma size={28} />, name: "Figma", desc: "Design and prototyping tool", color: "bg-[#f24e1e] text-white" },
      ],
    },
  ];

  return (
    <section
      id="skill"
      className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Armory Stone Texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Forge Fire Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-15 animate-pulse" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#c4962a] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <Code className="w-8 h-8 text-[#c4962a]" />
          <h2 className="text-4xl font-black text-[#c4962a] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
            Skills
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-transparent" />
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              {/* Category Title */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-black text-[#c4962a] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                  {category.title}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
                  <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a]" />
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-4 border-[#c4962a]/30 hover:border-[#c4962a] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(196,150,42,0.4)] p-6 w-full max-w-sm animate-float"
                    style={{ 
                      animationDelay: `${sIdx * 0.1}s`,
                      animationDuration: `${3 + (sIdx % 3) * 0.5}s`
                    }}
                  >
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c4962a] transition-all duration-300 group-hover:w-6 group-hover:h-6" />

                    {/* Glowing Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c4962a]/0 to-[#c4962a]/0 group-hover:from-[#c4962a]/10 group-hover:to-[#c4962a]/5 transition-all duration-500" />

                    <div className="relative flex flex-col items-center text-center space-y-4">
                      <div
                        className={`p-4 border-2 border-[#c4962a] group-hover:border-[#ffd700] group-hover:shadow-[0_0_20px_rgba(196,150,42,0.5)] transition-all duration-500 ${skill.color} flex items-center justify-center w-16 h-16 text-lg font-bold animate-icon-pulse`}
                      >
                        {skill.icon}
                      </div>
                      
                      <h4 className="text-xl font-black text-[#c4962a] group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Cinzel, serif' }}>
                        {skill.name}
                      </h4>

                      {/* Decorative Divider */}
                      <div className="flex items-center gap-2 w-full justify-center">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#c4962a] to-[#c4962a]" />
                        <div className="w-1.5 h-1.5 bg-[#c4962a] rounded-full animate-pulse" />
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent via-[#c4962a] to-[#c4962a]" />
                      </div>

                      <p className="text-[#d4d4d4] text-sm leading-relaxed group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes icon-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skill;