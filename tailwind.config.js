/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
      },
      fontFamily: {
        'general-sans': ['"General Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

