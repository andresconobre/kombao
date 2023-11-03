/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    fontFamily: {
      'space-mono': ['Space Mono', 'monospace'],
      'raleway': ['Raleway', 'sans-serif']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {},
  },
  plugins: [],
}

