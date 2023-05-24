/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#a460f9",
        bg: "#181818",
      },
      fontFamily: {
        Main: ["Oswald", "sans-serif"],
        krub: ["Krub", "sans-serif"],
      },
    },
  },
  plugins: [],
};

