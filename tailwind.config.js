/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
            './src/*.{js,jsx}',
            './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens:{
        'first-break':'770px',
        'second-break':'450px'
      }
    },
  },
  plugins: [],
}

