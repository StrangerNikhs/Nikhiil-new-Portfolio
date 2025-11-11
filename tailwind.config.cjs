/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#FFFFF0",
        darkHover: "#FFD700",
        darkTheme: "#4F200D",
      },
      fontFamily: {
        Outfit: ["Pacifico", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        cursive: ["cursive"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
