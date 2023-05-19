const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
      heading: ['var(--font-heading)', ...fontFamily.sans],
    },
    zIndex: {
      '-1': '-1',
      '1': '1',
    },
  },
};
