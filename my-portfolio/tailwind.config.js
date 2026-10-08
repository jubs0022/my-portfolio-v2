/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rokkitt: ["Rokkitt", "san-serif"],
        Poppins: ["Poppins", "san-serif"],
        Montserrat: ["Montserrat", "san-serif"],
        Montaga: ["Montaga", "san-serif"]
      },
      screens: {
        xsm: '320px',
      }
    },
  },
  plugins: [],
}

