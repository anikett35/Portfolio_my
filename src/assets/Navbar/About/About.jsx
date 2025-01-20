import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-xl bg-opacity-70  p-12 w-full"
    >
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Profile Image */}
        <div className="flex justify-center md:w-1/3">
          <img
            className="h-48 w-48 md:h-72 md:w-72 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 border-4 border-amber-500"
            src="/profile-pic.png"
            alt="Profile Picture"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col gap-6 md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            I am a passionate frontend developer and UI/UX designer, dedicated
            to creating elegant and functional web applications. My work blends
            innovative design principles with user-friendly interfaces to
            deliver the best possible experience.
          </p>

          {/* Skills/Focus Areas */}
          <ul className="flex flex-col gap-6">
            {/* Skill 1 */}
            <li className="flex items-start gap-4 hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <IoArrowForward size={30} className="text-amber-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h3>
                <p className="text-sm md:font-medium text-gray-400 leading-relaxed">
                  Experienced in building responsive, user-friendly websites
                  using React, Tailwind CSS, and other modern technologies.
                </p>
              </div>
            </li>

            {/* Skill 2 */}
            <li className="flex items-start gap-4 hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <IoArrowForward size={30} className="text-amber-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                  UI/UX Designer
                </h3>
                <p className="text-sm md:font-medium text-gray-400 leading-relaxed">
                  Skilled in designing intuitive interfaces and creating user
                  experiences that resonate with the target audience.
                </p>
              </div>
            </li>

            {/* Skill 3 */}
            <li className="flex items-start gap-4 hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <IoArrowForward size={30} className="text-amber-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                  Software Testing
                </h3>
                <p className="text-sm md:font-medium text-gray-400 leading-relaxed">
                  Proficient in testing and debugging software to ensure
                  high-quality and reliable performance.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
