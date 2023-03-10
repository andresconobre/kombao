/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./view/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: {
          amd: '#ED1C24',
          mm: '#C1172B'
        }
      },
      fontFamily: {
        comicneue: ['Comic Neue', 'cursive'],
        opensans: ['Open Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}
