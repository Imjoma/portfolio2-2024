/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#0E0E10",
        "background-secondary": "#1a1a1a",
        tagBackground: "#2F2F35",
        themeColorPrimary: "#A970FF",
        themeColorPrimary2: "#583D83",
        themeColorDarker: "#1C1F33",
        textPrimary: "#f2f2f2",
        textSecondary: "#C1C1C1",
        textTertiary: "#9F9F9F",
      },
    },
  },
  plugins: [],
};
