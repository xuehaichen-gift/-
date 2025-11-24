/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        douban: {
          green: '#007722',
          bg: '#f6f6f1',
          text: '#111111',
          gray: '#9b9b9b',
          light: '#eefcf0'
        }
      }
    },
  },
  plugins: [],
}