/* eslint-disable */

var colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
  },
  darkMode: "media",
  plugins: [
    require("flowbite/plugin"),
  ],
};
