/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '425px',
      't': '768px',
      'l': '1024px',
    },
    colors: {
      "transparent": 'transparent',
    },
    fontFamily: {
      'font': 'font'
    }
  },
  plugins: [],
}