import React from "react";
import { User } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <User className="w-7 h-7 text-yellow-400" />
          <h2 className="text-3xl font-bold text-yellow-400">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-lg leading-relaxed">
            <p>
              My name is <span className="text-amber-400 font-semibold">Aniket Bedwal</span>, 
              a passionate and self-driven <span className="text-amber-400 font-semibold">B.Tech</span> student in 
              Computer Science (AI) at <span className="text-amber-400 font-semibold">VIT Pune</span>. I am determined to make my family proud by contributing meaningfully to the tech industry.
            </p>
            <p>
              I have hands-on experience as a <span className="text-amber-400 font-semibold">Full-Stack Developer Intern</span> at 
              <span className="text-amber-400 font-semibold"> Astraeus Next Gen</span>, building responsive web applications using 
              <span className="text-amber-400 font-semibold"> React.js, Tailwind CSS</span>. I also work as a 
              <span className="text-amber-400 font-semibold"> Content Moderator Intern</span> at 
              <span className="text-amber-400 font-semibold"> Innovitica Pvt. Ltd</span>.
            </p>
            
            <p>
              My journey is fueled by <span className="text-amber-400 font-semibold">dedication and consistent effort</span>. I actively participate in hackathons, open-source initiatives, and continuous learning to grow as a professional. I’m always ready to <span className="text-amber-400 font-semibold">collaborate, innovate, and make an impact</span>.
            </p>
          </div>

          {/* Right Content - Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Inner Shadow Box */}
              <div className="relative bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/profile-pic.png"
                  alt="Aniket's Profile"
                  className="w-64 h-96 md:w-72 md:h-[450px] object-cover rounded-xl border-2 border-white/20"
                />

                {/* Available Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
