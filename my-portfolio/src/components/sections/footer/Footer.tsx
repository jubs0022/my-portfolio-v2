import { useEffect, useState } from "react";
import { getTheme } from "../../Variables/Variables";

export default function Footer() {
const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const handler = (e: Event) => {
      const newTheme = (e as CustomEvent).detail as "light" | "dark";
      setTheme(newTheme); // trigger re-render when global theme changes
    };
    window.addEventListener("themeChange", handler);
    return () => window.removeEventListener("themeChange", handler);
  }, []);
  return (
    <footer>
      <div className="max-w-screen-xl w-screen h-20 flex dark:text-white justify-between items-center mx-auto  font-Poppins pt-[19px]">
        <div className="xl:flex font-normal   ">
          <p className="text-[12px] xl:text-[16px]">© 2025 JUBERT Portfolio</p>
        </div>
        <div>
          <p className="text-[11px] xl:text-[16px]">
            Built with React.JS + Vite and Tailwind
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/jubert-nantes-302206347"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              src="/images/linkedin.png"
              alt=""
            />
          </a>
          <a
            href="https://github.com/jubertnantes0418-netizen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              src={theme === "light" ? "/images/github.png" : "/images/github-white.png"}
              alt=""
            />
          </a>
          <a
            href="mailto:jubert.nantes0418@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              src="/images/gmail.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
