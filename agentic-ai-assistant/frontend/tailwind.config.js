/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gemini: {
          50: '#f8fafc',
          500: '#4285f4',
          600: '#1a73e8',
          900: '#0d47a1',
        },
      },
    },
  },
  plugins: [],
}


