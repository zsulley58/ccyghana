/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'display': ["'Big Shoulders Display'", 'sans-serif'], // Adding the Big Shoulders Display font
    },
  },
  plugins: [],
}