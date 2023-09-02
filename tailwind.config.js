/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundColor: {
        'light-blue': '#ADD8E6',

      },
      textColor: {
        'slate-300': '#CCCCCC',
        'black': '#000000'
      },
      borderColor: {
        'dark-blue': '#00008B',
      }
    },
  },
  plugins: [],
}








