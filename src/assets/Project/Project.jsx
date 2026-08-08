import React from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "PolicyEngine",
    image: "/v1.png",
    liveUrl: "#",
    githubUrl: "#",
    description: "Enterprise compliance platform built with Rubiscape Technologies for policy management at scale. Architected FastAPI backend with dynamic rule engine, JWT auth, role-based access control, and audit logging. Integrated Groq LLaMA 3.3 for AI-assisted policy generation.",
    tech: ["FastAPI", "React 18", "MongoDB", "Groq LLaMA 3.3", "Random Forest"],
    glow: "rgba(59, 130, 246, 0.4)", // primary
  },
  {
    id: 2,
    title: "Alumni-Connect",
    image: "/v5.png",
    liveUrl: "http://digital-platform-alumini.vercel.app",
    githubUrl: "#",
    description: "Built a full-stack platform enabling real-time student-alumni networking, mentorship, and career guidance. Implemented Socket.IO for live messaging and JWT for secure stateless authentication. Designed admin analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    glow: "rgba(34, 211, 238, 0.4)", // secondary
  },
  {
    id: 3,
    title: "MediMage",
    image: "/v3.png",
    liveUrl: "https://medi-mage.vercel.app/",
    githubUrl: "#",
    description: "A doctor appointment booking platform enabling users to schedule visits, manage prescriptions, and monitor healthcare records efficiently.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    glow: "rgba(16, 185, 129, 0.4)", // emerald
  },
  {
    id: 4,
    title: "PetCare",
    image: "/v4.png",
    liveUrl: "https://pet-care-new.vercel.app/",
    githubUrl: "#",
    description: "A MERN-based pet healthcare solution that helps owners manage veterinary appointments, medical history, and vaccination reminders.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    glow: "rgba(245, 158, 11, 0.4)", // amber
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -4, scale: 1.01 }}
    className="group relative flex flex-col bg-surface/30 backdrop-blur-md border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 h-full"
    style={{
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Hover Glow Effect */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${project.glow} 0%, transparent 70%)`
      }}
    />

    <div className="p-4 z-10">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-border/50 bg-background/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/logo.png";
            e.target.className = "w-1/2 h-1/2 object-contain m-auto opacity-20 filter grayscale";
          }}
        />
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 mix-blend-multiply opacity-50" />
      </div>
    </div>

    <div className="flex flex-col flex-grow p-6 pt-2 z-10">
      <h3 className="text-h3 text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      
      <p className="text-body text-text-secondary mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((techItem, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 bg-white/5 border border-border text-text-secondary text-xs font-medium rounded-md"
          >
            {techItem}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white rounded-lg font-medium text-sm transition-colors duration-300"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 text-text border border-white/10 hover:bg-white/10 hover:text-white rounded-lg font-medium text-sm transition-colors duration-300"
        >
          <Github size={16} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative section-py z-10 border-t border-border/50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
            <span className="text-eyebrow">Selected Work</span>
          </div>
          <h2 className="text-h2 text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-body text-text-secondary max-w-2xl">
            A selection of my recent engineering work, demonstrating expertise in full-stack architecture, scalability, and UX design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;