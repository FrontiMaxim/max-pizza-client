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
        'default': '#FFFAF4',
        'grey': '#CECECE'
      }
    } 
  },
  plugins: [],
}

