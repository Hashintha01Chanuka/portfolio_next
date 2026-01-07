import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-16">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented unique
          challenges and opportunities for growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Project 1 */}
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.Doctor}
              alt="Landing Icon"
              className="w-full object-cover h-36 relative"
            />

            <h3 className="text-xl font-semibold mb-2 text-indigo-500 dark:text-indigo-4001 hover:text-indigo-400 dark:hover:text-indigo-300 transition flex items-center p-6 ">
              Doctor Booking System
            </h3>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.landing}
              alt="Landing Icon"
              className="w-full  object-cover h-36 relative"
            />

            <h3 className="text-xl font-semibold mb-2 text-purple-500 dark:text-purple-400 hover:text-purple-400 dark:hover:text-purple-300 p-6">
              Landing Page
            </h3>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.Amazone}
              alt="Landing Icon"
              className="w-full  object-cover h-36  relative"
            />

            <h3 className="text-xl text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 font-semibold mb-2 p-6">
              Amazone Clone
            </h3>
          </div>

          {/* Project 4 */}
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.LMS}
              alt="Landing Icon"
              className="w-full  object-cover h-36  relative"
            />

            <h3 className="text-xl font-semibold mb-2 text-purple-500 dark:text-purple-400 hover:text-purple-400 dark:hover:text-purple-300 p-6">
              LMS
            </h3>
          </div>

          

        </div>

        <div className="text-center mt-12">
          <Link
            href="/ProjectMore"
            className="px-6 py-6 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            View All Projects
          </Link>
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
