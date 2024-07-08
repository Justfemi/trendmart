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
      borderRadius: {
        'custom-3': '3px',
        'custom-8': '8px',
        'custom-10': '10px',
        'custom-50': '50px',
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  variants: {},
  plugins: [],
}

