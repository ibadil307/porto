/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  variants: {},
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Sen', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
