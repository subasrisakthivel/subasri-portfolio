import { useState } from "react";
import { FaMoon,FaSun } from "react-icons/fa";



function Navbar({darkMode,setDarkMode}) {
  
  const downloadResume = () => {
    window.open("/Subasri_Resume.pdf");
  };

  const navLinks = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Project",
      path: "#projects",
    },
    {
      name: "Experience",
      path: "#experience",
    },
    {
      name: "Education",
      path: "#education",
    },
    {
      name: "Certification",
      path: "#certification",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
   
    <header className="bg-white text-black dark:bg-slate-950 dark:text-white">
      <div className="flex item-center justify-between py-4 mx-auto">
        <h1 className="text-2xl font-bold">Subasri.</h1>
        <nav>
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-full bg-slate-800 flex item-center justify-center">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={downloadResume}
            className="px-5 py-2 border rounded-2xl bg-purple-700 hover:bg-blue-700"
          >
            Download Resume
          </button>
        </div>
      </div>
    </header>
   
  );
}
export default Navbar;
