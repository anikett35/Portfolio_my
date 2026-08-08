import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="relative bg-background border-t border-border section-py pb-12 z-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          
          {/* Contact Header */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-6">
                <span className="text-eyebrow">Get in touch</span>
              </div>
              <h2 className="text-h2 text-white mb-6">
                Let's build something extraordinary together.
              </h2>
              <p className="text-body text-text-secondary mb-10">
                Whether you have a specific project in mind, need a full-stack developer to join your team, or just want to chat about the latest in tech—my inbox is always open.
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-4">
                <a href="mailto:aniketbedwal90@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-border bg-surface/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                    <Mail size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">aniketbedwal90@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Glass Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-surface/30 backdrop-blur-xl border border-border rounded-2xl p-8 flex flex-col gap-6 shadow-glass relative overflow-hidden group"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all text-white placeholder-text-secondary/50 font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all text-white placeholder-text-secondary/50 font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all text-white placeholder-text-secondary/50 font-light resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="group relative w-full flex items-center justify-center gap-2 py-3.5 bg-primary/90 text-white rounded-xl font-medium text-base hover:bg-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] border border-primary/50"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-out" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Minimal Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-medium text-lg text-text tracking-wide">
              Aniket.
            </span>
          </div>

          <div className="flex gap-3">
            <a 
              href="mailto:aniketbedwal90@gmail.com" 
              className="w-10 h-10 rounded-full border border-border bg-surface/30 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aniket-bedwal/" 
              target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-surface/30 flex items-center justify-center text-text-secondary hover:text-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/anikett35" 
              target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-surface/30 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="text-sm font-light text-text-secondary flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-primary fill-primary/20" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;