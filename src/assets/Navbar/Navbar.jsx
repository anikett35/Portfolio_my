import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white px-6 py-4 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-md">
      {/* Brand Name */}
      <span className="text-x1 font-bold tracking-wide cursor-pointer text-amber-400">
        Portfolio
      </span>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex flex-col md:flex-row gap-6 md:gap-10 md:items-left mx-auto py-2 bg-black bg-opacity-50 md:bg-transparent md:static rounded-xl md:border-none text-left md:text-left`}
      >
        <a href="#about" className="text-md transition-all duration-300 hover:text-amber-400">
          <li className="p-2 md:p-0">About</li>
        </a>
        <a href="#skill" className="text-md transition-all duration-300 hover:text-amber-400">
          <li className="p-2 md:p-0">Skills</li>
        </a>
        <a href="#projects" className="text-md transition-all duration-300 hover:text-amber-400">
          <li className="p-2 md:p-0">Projects</li>
        </a>
        <a href="#contact" className="text-md transition-all duration-300 hover:text-amber-400">
          <li className="p-2 md:p-0">Contact</li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
