/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          DEFAULT: '#6b7280', // color gris por defecto
          focus: '#4b5563', // color gris para foco
        },
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['focus'],
      borderColor: ['focus'],
    },
  },
  plugins: [],
}
