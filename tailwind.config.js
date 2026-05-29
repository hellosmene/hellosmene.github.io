/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#181411',
        secondary: '#2e2621',
        surface: {
          500: '#221d19',
          600: '#2b241f',
        },
      },
      textColor: {
        primary: '#FFFFF0',
        secondary: '#a89a8a',
        accent: {
          500: '#a6683d',
          600: '#C78653',
        },
      },
      fill: {
        primary: 'red',
      },
      borderColor: {
        primary: '#3a312a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monocode'],
      },
    },
  },
  plugins: [],
};
