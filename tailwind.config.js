/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE5F00',
        'secondary': '#FFFAF4',
        'grey': '#CECECE',
        'error': '#FE0000',
        'active': '#0084FE'
      },
      boxShadow: {
        'st': '0 0 5px rgba(0, 0, 0, 0.25)'
      }
    } 
  },
  plugins: [],
}

