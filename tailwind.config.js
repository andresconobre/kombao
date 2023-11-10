/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'space-mono': ['Space Mono', 'monospace'],
      'raleway': ['Raleway', 'sans-serif']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      padding: {
        'header': '112px'
      },
      colors: {
        gray: {
          'dark': '#2b2b2b',
          'light': '#eee',
          'c1': '#383838',
          'c2': '#2e2e2e',
          'c3': '#272727',
        }
      }
    },
  },
  plugins: [],
}

