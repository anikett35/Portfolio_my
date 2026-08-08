import React from "react";
import { Code2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Spedrix",
    duration: "May 2026 - Present",
    type: "Remote",
    points: [
      "Developed the eSchoolwala and Peokit HRMS platforms using Next.js, TypeScript, and Prisma ORM.",
      "Implemented responsive UI, REST API integration, and database operations for enterprise web applications.",
      "Collaborated in Agile development using Git to deliver scalable full-stack solutions.",
    ],
    tech: ["Next.js", "TypeScript", "Prisma ORM", "React", "REST API", "Git"],
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "Innovitica Pvt Ltd",
    duration: "Feb 2026 - May 2026",
    type: "Remote",
    points: [
      "Delivered full-stack features using React, Node.js, Express, and MongoDB in an agile environment.",
      "Built REST APIs and crafted responsive UI components with Tailwind CSS.",
      "Worked on both frontend and backend layers, ensuring smooth integration between client and server code.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "Content Moderator Intern",
    company: "Innovitica Pvt Ltd",
    duration: "Jan 2025 - Aug 2025",
    type: "Remote",
    points: [
      "Managed and updated website content using WordPress CMS.",
      "Reviewed digital content to maintain platform quality standards.",
      "Applied SEO practices to improve search visibility and website traffic.",
    ],
    tech: ["WordPress", "SEO", "Content Management"],
  },
  {
    id: 4,
    role: "Full-Stack Developer Intern",
    company: "Astraeus Next Gen",
    duration: "Jan 2025 - Apr 2025",
    type: "Remote",
    points: [
      "Developed responsive web pages using React, HTML, and Tailwind CSS.",
      "Integrated frontend components with backend APIs.",
      "Used Git and GitHub for version control and collaboration.",
    ],
    tech: ["React", "Tailwind CSS", "HTML/CSS", "Git"],
  },
];

const WorkExperience = () => {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" className="relative section-py z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
            <span className="text-eyebrow">Career Path</span>
          </div>
          <h2 className="text-h2 text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          
          {/* Glowing Signal Path Timeline */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-border">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />
          </div>

          {/* Timeline Items */}
          <div className="relative space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center"
                >
                  
                  {/* Glowing Node */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-primary rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute inset-0.5 bg-primary rounded-full"
                    />
                  </div>

                  {/* Desktop Layout Helper: Empty Column for Staggered Look */}
                  <div className={`hidden md:block ${isEven ? 'order-2' : 'order-1'}`} />

                  {/* Glass Experience Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    className={`w-full pl-12 md:pl-0 ${isEven ? 'order-1' : 'order-2'}`}
                  >
                    <div className="bg-card backdrop-blur-md border border-border rounded-2xl p-6 md:p-7 hover:bg-surface/80 hover:border-primary/30 hover:shadow-glow transition-all duration-500">
                      
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 mb-4">
                        <h3 className="text-h3 text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-text-secondary">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="text-primary font-medium text-body mb-6">
                        {exp.company} <span className="text-text-secondary font-normal ml-2">({exp.type})</span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start text-text-secondary text-body">
                            <span className="mr-3 mt-[0.4rem] w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        {exp.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-border text-text-secondary"
                          >
                            <Code2 size={12} className="mr-1.5 text-primary/70" />
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
