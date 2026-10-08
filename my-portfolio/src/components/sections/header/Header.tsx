import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTheme, setThemeGlobal } from "../../Variables/Variables";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const handler = (e: Event) => {
      const newTheme = (e as CustomEvent).detail as "light" | "dark";
      setTheme(newTheme);
    };
    window.addEventListener("themeChange", handler);
    return () => window.removeEventListener("themeChange", handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeGlobal(newTheme); // updates global and triggers event
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#1e1f1f] flex justify-center items-center sticky top-0 z-50 py-3">
      <div className="w-full flex items-center 
        m-3 ml-8
        sm:justify-between sm:m-0">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative w-7 h-6 flex flex-col justify-between items-center sm:hidden"
        >
          <span
            className={`h-1 w-full rounded-full bg-gray-900 transition-all duration-300 ease-in-out
        ${open ? "translate-y-3 rotate-45" : ""}`}
          />
          <span
            className={`h-1 w-full rounded-full bg-gray-900 transition-all duration-300 ease-in-out
        ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-1 w-full rounded-full bg-gray-900 transition-all duration-300 ease-in-out
        ${open ? "-translate-y-3 -rotate-45" : ""}`}
          />
        </button>
        <nav className="hidden">
          <ul className="gap-6 md:gap-9 font-Poppins dark:text-white text-base xl:text-xl">
            <li>
              <Link to="/portfolio/">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio/contacts">CONTACT</Link>
            </li>
            <li>
              <Link to="/portfolio/projects">PROJECTS</Link>
            </li>
          </ul>
        </nav>
        <div className="font-Poppins font-bold text-3xl dark:text-white ml-5 sm:ml-0">
          <span className="text-[#135B9E] dark:text-[#92B8D6]">J</span>
          <span >Nantes</span>
        </div>

        <nav>
          <ul className="gap-6 md:gap-9 font-Poppins dark:text-white text-base xl:text-xl hidden md:flex">
            <li>
              <Link to="/portfolio/">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio/contacts">CONTACT</Link>
            </li>
            <li>
              <Link to="/portfolio/projects">PROJECTS</Link>
            </li>
          </ul>
        </nav>

        {/* Toggle Button */}
        <button
          id="switchKnob"
          type="button"
          onClick={toggleTheme}
          className={`rounded-full items-center px-1 cursor-pointer transition-all focus:outline-none  dark:focus:ring-gray-500 hidden md:flex ${
            theme === "light" ? "bg-[#1459CC]" : "bg-gray-700"
          } w-20 h-11 `}
        >
          <div
            className={` p-1 bg-white rounded-full transition-transform ${
              theme === "light"
                ? "translate-x-0"
                : "translate-x-9 md:translate-x-9"
            } w-9 h-9`}
          >
            <img
              src={theme === "light" ? "/images/sun.png" : "/images/moon.png"}
              alt="theme icon"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
