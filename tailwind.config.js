/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgAksen: '#6ee755',
        bgPrimer: '#98BBFF',
        textPrimer: '#ffffff',
        textSecondary: '#000000',
        textNonHover: '#9a9a9a',
      },
      fontSize: {
        'h1': '5rem',
      },
      width:{
        'button-sm': '24rem', 
      }
    },
  },
  plugins: [],
}

