/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "mx-2xl": { max: "1535px" },
      "mx-xl": { max: "1279px" },
      "mx-lg": { max: "1023px" },
      "mx-md": { max: "767px" },
      "mx-sm": { max: "639px" },
      xs: "480px",
    },
  },
  plugins: [require("daisyui")],
};
