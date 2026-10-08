import { useEffect } from "react";

export default function ThemeOnLoad(){
    useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light"; // get saved theme
  (savedTheme);

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("bg-[#0D1117]", "text-white");
    document.body.classList.remove("bg-white", "text-black");
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.add("bg-white", "text-black");
    document.body.classList.remove("bg-[#0D1117]", "text-white");
  }
}, []);
}