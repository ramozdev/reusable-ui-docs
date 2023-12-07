import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/demos/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf2fb",
          100: "#fce8f9",
          200: "#fbd0f3",
          300: "#f9a9e9",
          400: "#f471d6",
          500: "#ec46c2",
          600: "#db29a6",
          700: "#bf1887",
          800: "#9b175b",
          900: "#81184e",
          950: "#50072d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
