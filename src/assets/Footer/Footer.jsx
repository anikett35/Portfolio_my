import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div
      id="contact"
      className="relative bg-gradient-to-b from-[#0a0a0a] to-[#000000] text-white py-12 px-4 md:px-8 border-t-4 border-[#c4962a] overflow-hidden"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

      {/* Stone Texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Candle Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#c4962a] rounded-full blur-[120px] opacity-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Information Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#c4962a]" />
              <h1 className="text-3xl md:text-4xl font-black text-[#c4962a] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
                Contact
              </h1>
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#c4962a] to-transparent" />
            </div>
            <h3 className="text-sm md:text-base font-medium text-[#d4d4d4] tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Send a raven, reach out!
            </h3>
          </div>

          {/* Contact Links */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-xs md:text-sm">
            <li className="group flex items-center gap-3 transition-all duration-300">
              <div className="p-2 bg-[#c4962a]/10 border-2 border-[#c4962a]/30 group-hover:border-[#c4962a] group-hover:bg-[#c4962a]/20 transition-all duration-300">
                <MdOutlineEmail size={20} className="text-[#c4962a]" />
              </div>
              <a
                href="mailto:aniketbedwal90@gmail.com"
                className="text-[#d4d4d4] hover:text-[#c4962a] transition-all duration-300 font-medium tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                aniketbedwal90@gmail.com
              </a>
            </li>
            <li className="group flex items-center gap-3 transition-all duration-300">
              <div className="p-2 bg-[#c4962a]/10 border-2 border-[#c4962a]/30 group-hover:border-[#c4962a] group-hover:bg-[#c4962a]/20 transition-all duration-300">
                <CiLinkedin size={20} className="text-[#c4962a]" />
              </div>
              <a
                href="https://www.linkedin.com/in/aniket-bedwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4d4d4] hover:text-[#c4962a] transition-all duration-300 font-medium tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                linkedin.com
              </a>
            </li>
            <li className="group flex items-center gap-3 transition-all duration-300">
              <div className="p-2 bg-[#c4962a]/10 border-2 border-[#c4962a]/30 group-hover:border-[#c4962a] group-hover:bg-[#c4962a]/20 transition-all duration-300">
                <FaGithub size={20} className="text-[#c4962a]" />
              </div>
              <a
                href="https://github.com/anikett35"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4d4d4] hover:text-[#c4962a] transition-all duration-300 font-medium tracking-wider"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                github.com
              </a>
            </li>
          </ul>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
          <div className="w-2 h-2 rotate-45 border-2 border-[#c4962a]" />
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
        </div>

        {/* Bottom Seal */}
        <div className="text-center">
          <p className="text-[#8b8b8b] text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
            Forged with Honor & Code
          </p>
          <p className="text-[#8b8b8b] text-xs mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            © 2026 Aniket Bedwal. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4962a] to-transparent" />
    </div>
  );
};

export default Footer;