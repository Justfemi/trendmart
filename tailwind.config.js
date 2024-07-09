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
        'xs-custom': '10px',
      },
      fontFamily: {
        'general-sans': ['"General Sans"', 'sans-serif'],
      },
      borderRadius: {
        'custom-3': '3px',
        'custom-4': '4px',
        'custom-6': '6px',
        'custom-8': '8px',
        'custom-10': '10px',
        'custom-30': '30px',
        'custom-50': '50px',
      },
      screens: {
        'xs': '375px',
      },
      colors: {
        'custom-purple': '#6A1B9A',
      },
    },
  },
  variants: {},
  plugins: [],
}

