import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <section id="about" className="py-16 px-20 dark:bg-gray-900 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={assets.tharindi}
                  alt="User"
                  className="object-cover w-full h-full max-w-none"
                />
              </div>

              
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-3/5 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="gradient-text">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm an enthusiastic undergraduate student with a passion for web
              development. I focus on front-end development and UI/UX design,
              and I enjoy building modern, responsive, and user-friendly
              websites.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Outside of coding, I like learning new technologies, contributing
              to open-source projects, and spending time outdoors to keep a good
              balance in life.
            </p>

            {/* Skills / Info Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <div className="flex items-start sm:items-center w-full sm:w-auto">
                <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-graduation-cap text-indigo-400 text-lg sm:text-xl"></i>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Under Graduate
                </p>
              </div>

              <div className="flex items-start sm:items-center w-full sm:w-auto">
                <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-laptop-code text-indigo-400 text-lg sm:text-xl"></i>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base items-center">
                  Responsive Web Design
                </p>
              </div>

              <div className="flex items-start sm:items-center w-full sm:w-auto">
                <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                  <i className="fas fa-users text-indigo-400 text-lg sm:text-xl"></i>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Team Collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
