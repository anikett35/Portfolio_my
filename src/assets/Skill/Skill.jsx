import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiPython, SiCplusplus, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiSocketdotio,
  SiMongodb, SiMysql, SiPrisma, SiOpenjdk,
  SiGit, SiGithub, SiFigma 
} from "react-icons/si";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiOpenjdk, name: "Java", color: "#007396" },
      { icon: SiCplusplus, name: "C++", color: "#00599C" },
      { icon: SiMysql, name: "SQL", color: "#4479A1" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express", color: "#FFFFFF" },
      { icon: SiSocketdotio, name: "Socket.IO", color: "#010101" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const activeCategoryData = skillCategories.find(c => c.id === activeCategory);

  return (
    <section id="skill" className="relative section-py z-10 border-t border-border/50 min-h-[600px]">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
            <span className="text-eyebrow">Tech Stack</span>
          </div>
          <h2 className="text-h2 text-white">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* Tabbed Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? "text-white" 
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skillTabIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center"
            >
              {activeCategoryData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative w-full aspect-square bg-card backdrop-blur-md border border-border rounded-2xl flex flex-col items-center justify-center p-6 cursor-default transition-colors duration-300 hover:bg-surface/80 overflow-hidden"
                >
                  {/* Brand Color Glow on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`
                    }}
                  />

                  <div 
                    className="mb-4 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color, filter: `drop-shadow(0 0 12px ${skill.color}50)` }}
                  >
                    <skill.icon size={32} />
                  </div>
                  
                  <h4 className="text-body font-medium text-text-secondary group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h4>
                  
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skill;