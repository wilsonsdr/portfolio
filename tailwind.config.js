/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-color": "#123",
        "primary-color": "#a7b6c2",
        "secondary-color": "#fff",
        "highlight-color": "#f9c784",
        "info-color": "#e0e0e0",
        "card-color": "#f2e8d4",
        "dark-color": "#333",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        logo: ["Sarina", "cursive"],
      },
    },
  },
  plugins: [],
};
