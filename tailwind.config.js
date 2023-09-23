/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mist': '#e9e1ce',
        'dark-grey': '#3d3d3c',
        'primary-color': '#482122'
      },
      screens: {
        'slg': '800px',
        'smd': '639px',
        'mb': '460px'
      }
    },
  },
  plugins: [],
}