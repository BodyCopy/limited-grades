module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
        common: "#1a1718",
        uncommon: "#707883",
        rare: "#a58e4a",
        mythic: "#bf4427",
      },
      fontFamily: {
        belerenSmallCaps: "Beleren SmallCaps Bold",
      },
    },
  },
  plugins: [],
};
