import React from "react";
import { Code2, BookOpen, Youtube, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon: Icon, value, suffix = "", label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 0.6, delay }}
      className="relative p-6 rounded-2xl bg-surface/40 backdrop-blur-md border border-border overflow-hidden group hover:bg-surface/60 transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
          <Icon size={20} />
        </div>
        <span className="text-eyebrow">{label}</span>
      </div>
      
      <div className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight flex items-baseline">
        {inView ? (
          <CountUp
            end={parseFloat(value)}
            decimals={value.includes('.') ? 2 : 0}
            duration={2.5}
            separator=","
            useEasing={true}
          />
        ) : (
          "0"
        )}
        <span className="text-2xl text-primary ml-1">{suffix}</span>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative section-py z-10 border-t border-border/50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex-1 lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
              <span className="text-eyebrow">About Me</span>
            </div>
            
            <h2 className="text-h2 text-white mb-8">
              Transforming complex problems into elegant, scalable solutions.
            </h2>
            
            <div className="space-y-6 text-body text-text-secondary">
              <p>
                I am <strong className="text-white font-medium">Aniket Bedwal</strong>, a passionate and self-driven software engineer with a focus on building robust full-stack applications.
              </p>
              <p>
                Currently pursuing my <strong className="text-white font-medium">B.Tech in Computer Science (AI)</strong> at VIT Pune (CGPA: 9.26), after completing a Diploma in Information Technology from Government Polytechnic Mumbai (91.08%).
              </p>
              <p>
                With multiple internships spanning full-stack development and frontend engineering, I have cultivated strong expertise in the MERN stack, Next.js, scalable REST APIs, and secure authentication systems. I am deeply interested in integrating AI/ML models into enterprise-grade applications.
              </p>
            </div>

            <motion.a 
              href="#experience"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:text-white transition-colors"
            >
              View my experience
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              icon={Code2} 
              label="Projects Built" 
              value="15" 
              suffix="+" 
              delay={0.2} 
            />
            <StatCard 
              icon={BookOpen} 
              label="CGPA (B.Tech)" 
              value="9.26" 
              delay={0.3} 
            />
            <StatCard 
              icon={Youtube} 
              label="Subscribers" 
              value="27" 
              suffix="k+" 
              delay={0.4} 
            />
            <StatCard 
              icon={Award} 
              label="Internships" 
              value="4" 
              delay={0.5} 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;