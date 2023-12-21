/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"),require('tailwindcss-animated') ],
  daisyui: {
    themes: ["light"],
  },
};

