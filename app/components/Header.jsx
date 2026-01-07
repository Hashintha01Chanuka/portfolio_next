import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Adjust based on your path

const Header = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-40 md:pb-24 px-24 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center">
        {/* Left: Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Tharindi Aththanayaka
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
            UI/UX Designer & Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg max-w-xl mx-auto md:mx-0">
            I create beautiful, functional websites and applications with a
            focus on user experience and clean code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="/sample-resume.pdf"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg"
            >
              My Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right: Profile Image or SVG Avatar */}
        <div className="md:w-1/2 flex justify-center">
          {/* Circle Gradient Border Frame */}
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <Image
                src={assets.tharindi}
                alt="Profile"
                width={192}
                height={192}
                className="rounded-full object-cover w-56 h-56 md:w-64 md:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
