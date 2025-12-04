/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**" 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1383c6',
      }
    },
  },
  plugins: [],
}