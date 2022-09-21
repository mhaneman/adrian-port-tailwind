/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-rgba': 'rgba(30, 30, 30, 0.54)',
      },
    },
  },
  plugins: [],
}