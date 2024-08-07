/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#66837E',
        brown: '#9D4E2D',
        darkgreen: '#495F4B',
        lightbrown: '#DD9857',
        bluegray: '#9DABB6',
        darkishblue: '#36485E'
      }
    },
  },
  plugins: [],
}

