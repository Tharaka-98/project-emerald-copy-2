/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {},
    },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#74b3ce",
          secondary: "#ffd700",
          accent: "#8b4513",
          neutral: "#007D46",
          "base-100": "#f0faf4",
          success: "#007D46",
          "base-300": "5e615f",
        },
      },
      "garden",
      "forest",
    ],
  },
};