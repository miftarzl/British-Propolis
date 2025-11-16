/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D2001A',
        'brand-blue': '#093FB4',
      },
      fontFamily: {
        'racing': ['Racing Sans One', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

