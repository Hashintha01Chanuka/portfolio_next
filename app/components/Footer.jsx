import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-400 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition"
            >
              Contact
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/tharindi-aththanayaka-06a489313/"
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-indigo-600 hover:text-white transition"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/tharindi22?tab=overview&from=2025-02-01&to=2025-02-05"
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-indigo-600 hover:text-white transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553104328803"
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-indigo-600 hover:text-white transition"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/tharindi_attanayaka/"
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:bg-indigo-600 hover:text-white transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
