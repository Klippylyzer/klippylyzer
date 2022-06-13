/* eslint-disable */

var colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./node_modules/daisyui/**/*.js"],
  // Don't purge classnames in development, so classnames.d.ts is fully generated
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
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
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
