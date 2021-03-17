/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

// tailwind.config.js
module.exports = {
  plugins: [require("@tailwindcss/ui")],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },
    extend: {
      colors: {
        primary: {
          50: "#a8fdd2",
          100: "#76e0aa",
          200: "#38e18c",
          300: "#13cb6e",
          400: "#03b059",
          500: "#0a8647",
        },
        secondary: {
          50: "#6B7790",
          100: "#4C5C7C",
          200: "#394969",
          300: "#293651",
          400: "#192641",
          500: "#0B162E",
        },
        neutral: {
          100: "#FBFBFB",
          200: "#EEEEEE",
          300: "#D3D3D3",
          400: "#929292",
          500: "#777777",
          600: "#5F5F5F",
          700: "#494949",
          800: "#2C2C2C",
        },
        font: {
          white: "#F8F8F8",
          black: "#333333",
        },
        "light-blue": "#f9fbfe",
        "medium-blue": "#E5EEFD",
        light: "#FDFDFD",
        dark: "#222222",
        "dark-gray": "#313131",
        "medium-gray": "#464646",
      },
      height: {
        quarter: "25vh",
        half: "50vh",
        "three-quarters": "75vh",
      },
    },
  },
  variants: ["responsive", "hover", "focus", "active", "disabled"],
};
