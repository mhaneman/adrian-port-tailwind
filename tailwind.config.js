/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-hero': 'rgba(30, 30, 30, 0.85)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}