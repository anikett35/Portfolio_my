import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sikhley",
    image: "/v1.png",
    liveUrl: "https://sikhley.vercel.app/",
    description: "A modern LMS platform that streamlines course delivery, assessments, and learning progress tracking for students and instructors.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js","typeScript"],
  },
  {
    id: 2,
    title: "MediMage",
    image: "/v3.png",
    liveUrl: "https://medi-mage.vercel.app/",
    description: "A doctor appointment booking platform enabling users to schedule visits, manage prescriptions, and monitor healthcare records efficiently.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: 3,
    title: "PetCare",
    image: "/v4.png",
    liveUrl: "https://pet-care-new.vercel.app/",
    description: "A MERN-based pet healthcare solution that helps owners manage veterinary appointments, medical history, and vaccination reminders.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: 4,
    title: "Alumni-Connect",
    image: "/v5.png",
    liveUrl: "http://digital-platform-alumini.vercel.app",
    description: "An interactive digital platform connecting students and alumni through real-time messaging, mentorship programs, and community engagement. Users can create profiles, share posts, organize events, and build meaningful professional connections within their alumni network.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const ProjectCard = ({ project, index, isVisible }) => (
  <div
    className={`relative rounded-none overflow-hidden border-4 border-[#c4962a]/40 backdrop-blur-sm bg-[#1a1a1a] hover:border-[#c4962a] transition-all duration-500 group hover:shadow-[0_0_40px_rgba(196,150,42,0.3)] ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Corner Decorations */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#c4962a] z-10" />
    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#c4962a] z-10" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#c4962a] z-10" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#c4962a] z-10" />

    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter contrast-110 brightness-90"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 bg-gradient-to-br from-[#c4962a] to-[#8b6914] p-2 border-2 border-[#ffd700] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(196,150,42,0.5)]">
          <ArrowUpRight className="w-5 h-5 text-black" />
        </div>

        {/* Title Overlay Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-2xl font-black text-[#c4962a] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
            {project.title}
          </h3>
        </div>
      </div>

      <div className="px-6 py-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        {/* Decorative Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-gradient-to-r from-[#c4962a] to-transparent" />
          <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a]" />
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#c4962a] to-transparent" />
        </div>

        <p className="text-[#d4d4d4] text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((techItem, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-[#c4962a]/10 border border-[#c4962a]/30 text-[#c4962a] font-bold tracking-wider uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#c4962a] to-[#8b6914] hover:from-[#ffd700] hover:to-[#c4962a] transition-all duration-300 group-hover:scale-105 text-black cursor-pointer w-full justify-center border-2 border-[#ffd700] shadow-[0_0_15px_rgba(196,150,42,0.3)] overflow-hidden">
          <ExternalLink size={18} className="relative z-10" />
          <span className="relative z-10 font-bold tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
            VIEW PROJECTS
          </span>
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
      className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* War Room Map Texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Torch Glow Effects */}
      <div className="absolute top-1/4 left-20 w-96 h-96 bg-[#ff6b00] rounded-full blur-[120px] opacity-15 animate-pulse" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-[#c4962a] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className={`flex items-center gap-4 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Code className="w-8 h-8 text-[#c4962a]" />
          <h2 className="text-4xl font-black text-[#c4962a] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
            Projects
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#c4962a] via-[#ffd700] to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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