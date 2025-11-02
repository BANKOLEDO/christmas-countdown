/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        deepred: '#B22222', 
        forest: '#1E5631',
        charcoal: '#2D2D2D',
        gold: '#D7B65F',
        snow: '#F8FAFC',
        pine: '#0F5D2E'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'snowfall': 'snowfall 10s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite'
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
      }
    },
  },
  plugins: [],
}