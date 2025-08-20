import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LMS Platform",
    image: "/v1.png",
    liveUrl: "https://sikhley.vercel.app/",
    description: "A comprehensive Learning Management System for students and teachers.",
    tech: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Airline Booking System",
    image: "/v2.png",
    liveUrl: "https://cheap-flight.netlify.app/",
    description: "An online flight booking system with seat selection and payment integration.",
    tech: ["React.js", "Express.js", "MySQL", "Bootstrap"],
  },
];

const ProjectCard = ({ project, index, isVisible }) => (
  <div
    className={`relative rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm bg-[#1a1f3a]/50 transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
    >
      <div className="relative h-56 overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <ArrowUpRight className="w-6 h-6 text-white/80 hover:text-amber-400 transition-all duration-300" />
        </div>
      </div>

      <div className="px-4 py-4">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((techItem, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-gray-700/30 rounded-full text-white"
            >
              {techItem}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 transition-transform duration-300 hover:scale-105 text-white cursor-pointer w-max">
          <ExternalLink size={18} />
          <span>View Project</span>
        </div>
      </div>
    </a>
  </div>
);

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-[#0f172a] text-white relative overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header aligned like Work Experience */}
        <div className={`flex items-center gap-3 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Code className="w-7 h-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-yellow-400">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
