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
      'nav-menu': ['Indie Flower', 'cursive'],
      'title': ['Bungee', 'cursive'],
      'p': ['Poltawski Nowy', 'serif'],
      'typewriter': ['OCR A Extended', 'sans-serif'],
    }
  },
  plugins: [],
}
