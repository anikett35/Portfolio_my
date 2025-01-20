import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 bg-gradient-to-r from-gray-900 via-black to-gray-800"
    >
      {/* Left Content */}
      <div className="md:w-2/4 text-center md:text-left md:pt-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
          Hello, I'm <span className="text-amber-400">Aniket</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mt-4 leading-relaxed">
          I'm a passionate Frontend Developer and UI/UX Designer, dedicated to
          creating stunning and user-friendly web applications. Let's build
          something amazing together!
        </p>

        {/* Buttons Container */}
        <div className="flex flex-row space-x-4 mt-6">
          <button
            className="text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 hover:bg-amber-500 bg-amber-400 font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-48"
            onClick={() => {
              window.location.href =
                "mailto:aniketbedwal90@gmail.com?subject=Contact%20Me&body=Hi%20Aniket,%20I%20would%20like%20to%20connect%20with%20you!";
            }}
          >
            Contact Me
          </button>

          <a
            href="\Aniket bedwal.pdf"
            download
          >
            <button
              className="text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 hover:bg-blue-500 bg-blue-400 font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-48"
            >
               Resume
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/4 flex justify-center md:justify-end mb-3">
        <img
          className="w-60 md:w-80 rounded-full shadow-lg border-4 border-amber-500 hover:scale-110 transform transition-all duration-500 ease-in-out"
          src="/profile-pic.png"
          alt="Aniket's Profile Picture"
        />
      </div>
    </div>
  );
};

export default Home;
