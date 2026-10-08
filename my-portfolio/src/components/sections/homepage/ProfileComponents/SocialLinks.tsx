import { useEffect, useState } from "react";



export default function SocialLinks() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const newTheme = (e as CustomEvent).detail as "light" | "dark";
      setTheme(newTheme);
    };
    window.addEventListener("themeChange", handler);
    return () => window.removeEventListener("themeChange", handler);
  }, []);
  return (
    <div className="flex mt-8 justify-center items-center md:items-start md:justify-start">
      <a
        href="https://www.facebook.com/jubert.nantes.2024/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-8 mr-[20px] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          src="/images/facebook.png"
          alt=""
        />
      </a>
      <a
        href="https://linkedin.com/in/jubert-nantes-302206347"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-8  transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          src="/images/linkedin.png"
          alt=""
        />
      </a>
      <a
        href="mailto:jubert.nantes0418@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
            className="w-8 ml-[20px] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            src="/images/gmail.png"
            alt=""
          />
      </a>
      <a
        href="https://github.com/jubs0022"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
            className="w-8 ml-[20px] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={theme === "light" ? "/images/github.png" : "/images/github-white.png"}
            alt=""
          />
      </a>
    </div>
  );
}
