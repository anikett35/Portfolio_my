import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r to-gray-800 from-gray-900 to-gray-900 text-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center"
    >
      {/* Contact Information Section */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-extrabold text-yellow-500 mb-1">Contact</h1>
        <h3 className="text-sm md:text-lg font-light text-gray-300">Feel free to reach out!</h3>
      </div>

      {/* Contact Links */}
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs md:text-sm">
        <li className="flex items-center gap-2 hover:opacity-80 transition-all duration-300">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:aniketbedwal90@gmail.com"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            aniketbedwal90@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2 hover:opacity-80 transition-all duration-300">
          <CiLinkedin size={20} />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            linkedin.com
          </a>
        </li>
        <li className="flex items-center gap-2 hover:opacity-80 transition-all duration-300">
          <FaGithub size={20} />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            github.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
