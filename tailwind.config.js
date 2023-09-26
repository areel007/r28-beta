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
        'sxl': '1121px',
        'ssxl': '1060px',
        'slg': '844px',
        'bmd': '844px',
        'smd': '639px',
        'ssmd': '570px',
        'mb': '460px'
      },
      backgroundImage: {
        'board-room': "url('./src/assets/images/boardroom.jpg')"
      }
    },
  },
  plugins: [],
}