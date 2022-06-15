/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "jelly": '#3A7B99',
          "iceberg": '#70AFCE',
          "nophoto ": '#A5DEF1',
        }
      }
    },
  },
  plugins: [],
}