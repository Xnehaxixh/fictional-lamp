const colors = require("tailwindcss/colors");

// biome-ignore lint/performance/noDelete: Explanation below
delete colors.lightBlue;
// This is a known warning if all the colors are tried to import.
// github.com/tailwindlabs/tailwindcss/issues/4690

module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.tsx"],
  variants: {},
  plugins: [],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
};
