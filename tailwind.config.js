/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#F4D04E',
        customGrey: '#6B6B6B'
      }
    },
  },
  plugins: [],
};
