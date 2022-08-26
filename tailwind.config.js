module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
      },
      colors: {
        bg: "#23282E",
        fg: "#2C3239",
        sl: "#15191C",
        secondary: "#505C68",
      },
    },
  },
  plugins: [],
};
