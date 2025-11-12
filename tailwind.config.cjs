/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chartisan: {
          bg: "#0A0A0A",
          surface: "#121212",
          glass: "rgba(18,18,18,0.6)",
          text: "#E9E6DA",
          textMuted: "#A69E8C",
          gold: "#C7A86D",
          goldSoft: "#B9975C",
          goldDark: "#8E7443",
          border: "#1E1E1E",
        },
      },
      boxShadow: {
        softGlow: "0 0 25px rgba(199,168,109,0.08)",
        goldInner: "inset 0 0 12px rgba(199,168,109,0.05)",
        goldEdge: "0 0 15px rgba(199,168,109,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};