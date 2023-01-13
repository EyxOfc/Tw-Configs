/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'Cel': '320px',
      'Tab': '481px',
      'Not': '769px',
      'Pc': '1279px'
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