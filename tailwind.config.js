/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./view/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        comicneue: ['Comic Neue', 'cursive'],
      },
    },
  },
  plugins: [],
}
