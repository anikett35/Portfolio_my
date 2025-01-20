import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <div id="projects"className="bg-gradient-to-r from-gray-900 via-black to-gray-800 p-12 md:p-20  shadow-xl w-full text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project 1 */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a
            href="https://sikhley.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/v1.png"
              alt="LMS Platform"
              className="w-full h-56 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-semibold text-white mb-2">LMS Platform</h3>
              <IoArrowUpOutline size={30} className="text-white" />
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a
            href="https://cheap-flight.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/v2.png"
              alt="Airline Booking System"
              className="w-full h-56 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Airline Booking System
              </h3>
              <IoArrowUpOutline size={30} className="text-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
