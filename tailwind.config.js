/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./source/**/*{html,js}",
  "./node_modules/flowbite/**/*js"],
  theme: {
    extend: {

    },
  },
  plugins: [
      require ('flowbite/plugin')
  ],
}

