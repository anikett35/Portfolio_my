import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiGit, SiGithub } from "react-icons/si";

const Skill = () => {
  return (
    <div
      id="skill"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-10 md:p-24 shadow-xl w-full"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-yellow-500">Skills</h1>
      
      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Programming Languages & Frameworks */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">Programming Languages & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <FaHtml5 color="#E34F36" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <FaCss3 color="#1572B6" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <FaJs color="#F7DF1E" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <FaReact color="#61DAFB" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <SiTailwindcss color="#38B2AC" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <SiBootstrap color="#563D7C" size={60} />
            </span>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <SiGit color="#F05032" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <SiGithub color="#38B2AC" size={60} />
            </span>
            <span className="p-6 bg-zinc-950 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:bg-opacity-70">
              <FaFigma color="#F24E1E" size={60} />
            </span>
          </div>
        </div>
      </div>

      {/* Internship Details */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Internship Experience</h2>

        {/* Internship 1 */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-8 p-8 items-center shadow-lg bg-zinc-900 transform hover:scale-105 transition-all">
          <img
            src="/comp1.jpeg"
            alt="Company 1 Logo"
            className="w-24 h-24 border-4 border-white transform hover:scale-110 transition-transform"
          />
          <div>
            <h3 className="leading-tight text-white text-xl font-semibold">Full Stack Web Developer Intern</h3>
            <p className="text-sm leading-tight text-white">Jan 2025 - March 2025</p>
            <p className="mt-2 text-sm text-gray-200">
              Developed full-stack applications with modern technologies and frameworks for improved user experience and functionality.
            </p>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-0 p-8 items-center shadow-lg bg-zinc-900 transform hover:scale-105 transition-all">
          <img
            src="/comp2.jpeg"
            alt="Company 2 Logo"
            className="w-24 h-24 border-4 border-white transform hover:scale-110 transition-transform"
          />
          <div>
            <h3 className="leading-tight text-white text-xl font-semibold">Full Stack Project Intern</h3>
            <p className="text-sm leading-tight text-white">Jan 2025 - July 2025</p>
            <p className="mt-2 text-sm text-gray-200">
              Contributed to full-stack development projects, focusing on front-end user interfaces and backend systems for scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
