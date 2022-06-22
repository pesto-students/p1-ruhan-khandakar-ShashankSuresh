module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display SC", "cursive"],
      },
      colors: {
        gkBorderColor: "#e0e0e0",
        gkBgColor: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
