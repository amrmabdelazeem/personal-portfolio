/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills-bg': 'url("https://www.transparenttextures.com/patterns/crissxcross.png")',
      },
    },
  },
  plugins: [],
}

