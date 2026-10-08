import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Mobile() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  // On page load, ensure light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.body.classList.add("bg-white", "text-black");
    document.body.classList.remove("bg-[#1f1e1f]", "text-white");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-[#1f1e1f]", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-[#1f1e1f]", "text-white");
    }
  };

  return (
    <div className="mx-[40px]">
      <div className="flex">
        <button
          onClick={() => setOpen(true)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 border border-black dark:border-white
   hover:bg-gray-200 active:scale-95 transition-all rounded-xl shadow-sm mt-[30px] mr-[10px]"
        >
          <span className="w-6 h-[3px] bg-black dark:bg-white rounded"></span>
          <span className="w-6 h-[3px] bg-black dark:bg-white rounded"></span>
          <span className="w-6 h-[3px] bg-black dark:bg-white rounded"></span>
        </button>
        <div className="flex font-Poppins font-[700] text-[32px] mt-[26px]">
          <span className="text-[#135B9E] dark:text-[#92B8D6]">J</span>
          <span>Nantes</span>
        </div>
      </div>
      {/* Sidebar */}
      {/* Sidebar */}
      <div
        className={` fixed top-0 left-0 h-full bg-white dark:bg-[#1f1e1f] shadow-lg 
  w-3/4 max-w-xs z-50 flex flex-col
  ${open ? "translate-x-0" : "opacity-0 -translate-x-full"} font-Poppins`}
      >
        <ul className="flex flex-col font-normal text-[20px] m-[30px] gap-4">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contacts">CONTACT</Link>
          <Link to="/projects">PROJECTS</Link>
        </ul>

        <div className="mt-auto m-[30px] font-normal text-[20px]">
          <p className="mb-[10px]">Theme:</p>
          <div
            id="switchKnob"
            onClick={toggleTheme}
            className={`w-[75px] h-[37px] rounded-[50px] pl-[4px] pt-[4px] cursor-pointer transition-all duration-300
        ${theme === "light" ? "bg-[#1459CC]" : "bg-gray-700"}
      `}
          >
            <div
              className={`w-[28px] h-[28px] bg-white rounded-full p-[4px] transition-all duration-300
          ${theme === "light" ? "translate-x-0" : "translate-x-[38px]"}
        `}
            >
              <img
                src={theme === "light" ? "/images/sun.png" : "/images/moon.png"}
                alt="theme icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay — visibility tied to sidebar state */}
      <div
        className={`fixed top-0 left-3/4 h-full w-1/4 bg-black/50 z-40 
    ${
      open ? "opacity-100" : "opacity-0 pointer-events-none"
    } pl-[17vw] text-[25px]`}
      >
        <button className="text-white " onClick={() => setOpen(false)}>
          x
        </button>
      </div>
    </div>
  );
}
