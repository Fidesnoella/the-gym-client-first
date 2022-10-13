/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'BlurGradient': "url('./dist/images/Blur Gradient.svg')"
      }
    },
    colors: {
      primary: ' #1D2130',
      blue: '#6B7CFF',
      white: '#FFFFFF',
      violet: '#E0E4FC', 
      gray:'#EBECF0',
    }
  },
  plugins: [],
}