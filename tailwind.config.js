/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist:[      'bg-blue-500',
  'text-center',
  'hover:opacity-100',
  'lg:text-right',],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],

}

