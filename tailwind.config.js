/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors: {
        // primary: "#854d3d",
        primary: "#59ab6e",
        // secondary: "#4a1e1b",
        "primary-light": "#57969F",
        secondary: "#096c3e",
        brandDark: "#270c03",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      backgroundImage: {
        "banner-2": "url('/sorai-banners/banner_2.jpg')",
        "gradient-blue":
          "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
        "gradient-red":
          "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
        green:
          "linear-gradient(to right, rgba(34, 197, 94, 0.5), rgba(34, 197, 94, 0.5))",
        "gradient-green-left":
          "linear-gradient(to left top, rgba(34, 197, 94, 0.5) 0%, transparent 50%, transparent 100%)",
        "gradient-green-right":
          "linear-gradient(to right top, rgba(34, 197, 94, 0.5) 0%, transparent 50%, transparent 100%)",
        "gradient-black":
          "linear-gradient(to left top, rgba(0, 0, 0, 0.6) 0%, transparent 50%, transparent 100%)",
        "gradient-black-right":
          "linear-gradient(to right top, rgba(0, 0, 0, 0.6 ) 0%, transparent 50%, transparent 100%)",
        // "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100)",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
