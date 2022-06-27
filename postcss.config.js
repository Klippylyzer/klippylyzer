/* eslint-env node */

module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-ts-classnames":
      process.env.NODE_ENV === "development"
        ? {
            isModule: false,
            exportAsDefault: false,
          }
        : false,
  },
};
