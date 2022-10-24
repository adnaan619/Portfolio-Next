module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#02172F",
        "text-gray-color": "#fff",
      },
    },
  },
  plugins: [],
};
