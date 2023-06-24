/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        ascent: "#e91e63",
        // primary: "#fff",
        // secondary: "#000",
        // tertiary: "#e91e63",
        // heroPoint: "#915eff",
        heroPoint: "#e91e63",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-road": "url('/src/assets/download/road-bg.jpg')",
      },
    },
  },
  plugins: [],
};