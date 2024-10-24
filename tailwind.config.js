/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "mb-header": "url('../assets/bg-mobile.svg')",
        "dk-header": "url('../assets/dk-desktop.svg')"
      }
    },
  },
  plugins: [],
}