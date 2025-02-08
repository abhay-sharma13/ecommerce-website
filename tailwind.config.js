/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beaver: {
          50: "#f6f4f0",
          100: "#e9e2d8",
          200: "#d5c4b3",
          300: "#bda187",
          400: "#aa8265",
          500: "#906951",
          600: "#855a49",
          700: "#6b473d",
          800: "#5b3e38",
          900: "#503633",
          950: "#2d1c1b",
        },
      },
      fontFamily: {
        body: ["Instrument Sans", "serif"],
        heading: ["Instrument Serif", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
