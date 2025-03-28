/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scolBlue: "#0f81c7",
        scolLight: "#1b9eee",
        scolDark: "#0b6298",
        scolGray: "#e6e6e6",
        scolSky: "#4bb2f1",
      },
    },
  },
  plugins: [],
}
