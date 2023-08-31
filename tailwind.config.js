/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['ADLaM Display', 'cursive']
      },
      gridTemplateColumns: {
        '75': 'repeat(auto-fit, minmax(75px, 1fr))'
      }
    },
  },
  plugins: [],
}

