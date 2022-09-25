/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans"],
        poppins: ["Poppins", "sans"],
      }
    },
  },
  plugins: [
        require('flowbite/plugin')
  ]
}
