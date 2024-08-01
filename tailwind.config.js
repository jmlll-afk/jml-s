/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      fontFamily:{
        ovo: ["Ovo", "serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto Slab", "serif"]
      },
      colors:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        cardBG: '#C7C8CC',
        darkTheme: '#11001F',
      },
      boxShadow:{
        'black': '4px_4px_0_#000',
        'white': '4px_4px_0_#fff',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

