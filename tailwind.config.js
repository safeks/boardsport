/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        sm: "320px",
      },
      colors: {
        primary: "#111827",
        secondary: "#374151",
        accent: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
