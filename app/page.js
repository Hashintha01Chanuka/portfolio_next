"use client";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education"


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Save theme preference and update class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About />
      <Project isDarkMode={isDarkMode} />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      
    </>
  );
}                 