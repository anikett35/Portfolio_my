import React from "react";
import { Code  } from "lucide-react";
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
        { icon: <FaHtml5 size={24} />, name: "HTML5", desc: "Markup language for web pages", color: "bg-orange-500 text-white" },
        { icon: <FaCss3 size={24} />, name: "CSS3", desc: "Styling language for web design", color: "bg-blue-500 text-white" },
        { icon: <FaJs size={24} />, name: "JavaScript", desc: "Language of the web", color: "bg-yellow-400 text-black" },
        { icon: <FaPython size={24} />, name: "Python", desc: "High-level, versatile programming language", color: "bg-blue-600 text-white" },
        { icon: <FaJava size={24} />, name: "Java", desc: "Popular for enterprise applications", color: "bg-red-600 text-white" },
        { icon: "C++", name: "C++", desc: "Object-oriented programming language", color: "bg-blue-400 text-white" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <FaReact size={24} />, name: "React", desc: "JavaScript library for UI development", color: "bg-cyan-400 text-black" },
        { icon: <SiNextdotjs size={24} />, name: "Next.js", desc: "React-based JavaScript framework", color: "bg-black text-white" },
        { icon: <SiTailwindcss size={24} />, name: "Tailwind", desc: "Utility-first CSS framework", color: "bg-teal-500 text-white" },
        { icon: <FaBootstrap size={24} />, name: "Bootstrap", desc: "CSS framework for responsive design", color: "bg-purple-600 text-white" },
        { icon: <FaNodeJs size={24} />, name: "Node.js", desc: "JavaScript runtime for backend development", color: "bg-green-600 text-white" },
        { icon: <SiExpress size={24} />, name: "Express", desc: "Minimalist Node.js framework", color: "bg-gray-700 text-white" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMongodb size={24} />, name: "MongoDB", desc: "NoSQL document-based database", color: "bg-green-500 text-white" },
        { icon: <SiMysql size={24} />, name: "MySQL", desc: "Relational database management system", color: "bg-blue-600 text-white" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { icon: <FaGit size={24} />, name: "Git", desc: "Version control system", color: "bg-red-500 text-white" },
        { icon: <SiGithub size={24} />, name: "GitHub", desc: "Code hosting platform", color: "bg-gray-800 text-white" },
        { icon: <FaFigma size={24} />, name: "Figma", desc: "Design and prototyping tool", color: "bg-pink-500 text-white" },
      ],
    },
  ];

  return (
    <section
      id="skill"
      className="py-20 bg-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header aligned like Work Experience */}
        <div className="flex items-center gap-3 mb-12">
           <Code className="w-7 h-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-yellow-400">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              {/* Category Title */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-3 rounded-xl group-hover:bg-white/20 transition-colors ${skill.color} flex items-center justify-center w-12 h-12 text-lg font-bold`}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
