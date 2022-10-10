/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'blur': "url('./dist/images/Blur gradient.svg')",
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