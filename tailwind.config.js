const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        700: "#393A4C",
        800: "#25273c",
        900: "#161722",
      },
      red: colors.red,
      blue: {
        100: "#3F7EFD",
        200: "#2665E4",
        300: "#1958D7",
      },
      cyan: {
        100: "#57DDFF",
        200: "#4AD0F2",
        300: "#31B7D9",
      },
      fuchsia: {
        100: "#C058F3",
        200: "#B34BE6",
        300: "#9A32CD",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
