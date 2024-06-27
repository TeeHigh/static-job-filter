/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          desaturatedDarkCyan: 'hsl(180, 29%, 50%)',
          cyanBackground: 'hsl(180, 52%, 96%)',
          cyanFilter: 'hsl(180, 31%, 95%)',
          darkGrayishCyan: 'hsl(180, 8%, 52%)',
          veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        }
      }
    },
  },
  plugins: [],
}

