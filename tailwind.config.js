/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    fontFamily: {
      'nav-menu': ['Apercu', 'sans-serif'],
      'title': ['Libre Baskerville', 'serif'],
      'p': ['Apercu', 'sans-serif'],
    },
    colors: {
      "bg-color": "var(--bg-color)",
      "primary-color": "var(--primary-color)",
      "secondary-color": "var(--secondary-color)",
      "highlight-color": "var(--highlight-color)",
      "info-color": "var(--info-color)",
      "card-color": "var(--card-color)",
      "dark-color": "var(--dark-color)",
    }
  },
  plugins: [],
}
