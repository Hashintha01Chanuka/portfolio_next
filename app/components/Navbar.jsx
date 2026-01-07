import React, { useState, useEffect } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link transition ${
                activeSection === item.id
                  ? "text-indigo-400"
                  : "text-gray-800 dark:text-white"
              } hover:text-indigo-400`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Icon */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-800 dark:text-white hover:text-indigo-500 transition text-xl gap-5"
          >
            {isDarkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 w-full transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-800 dark:text-white hover:text-indigo-400 transition py-2"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile theme toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-800 dark:text-white hover:text-indigo-500 transition text-xl"
          >
            {isDarkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
