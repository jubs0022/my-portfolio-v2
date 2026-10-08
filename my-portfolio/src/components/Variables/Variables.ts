let globalTheme: "light" | "dark" =
  (localStorage.getItem("theme") as "light" | "dark") || "light";

export const getTheme = () => globalTheme;

export const setThemeGlobal = (newTheme: "light" | "dark") => {
  globalTheme = newTheme;
  localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  window.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }));
};


