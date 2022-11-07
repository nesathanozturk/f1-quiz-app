/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        koulen: ['Koulen', "cursive"],
      },
    },
  },
  plugins: [],
}
