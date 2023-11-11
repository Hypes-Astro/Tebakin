/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        bgAksen: '#6ee755',
        bgPrimer: '#98BBFF',
        textPrimer: '#ACBA4D',
        textSecondary: '#464646',
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

  
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

