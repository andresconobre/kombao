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
        rampart: ['Rampart One', 'cursive']
      },
    },
  },
  plugins: [],
}
