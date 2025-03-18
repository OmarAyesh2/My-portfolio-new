/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '0.382': '0.382rem',
        '0.618': '0.618rem',
        '1.618': '1.618rem',
        '2.618': '2.618rem',
        '4.236': '4.236rem',
        '6.854': '6.854rem',
        '11.089': '11.089rem',
      },
      fontSize: {
        'phi-sm': 'clamp(0.618rem, 1.5vw, 0.75rem)',
        'phi': 'clamp(1rem, 2vw, 1.125rem)',
        'phi-lg': 'clamp(1.618rem, 3vw, 1.875rem)',
        'phi-xl': 'clamp(2.618rem, 5vw, 3rem)',
        'phi-2xl': 'clamp(4.236rem, 7vw, 4.5rem)',
        'phi-3xl': 'clamp(6.854rem, 10vw, 7.5rem)',
      },
      width: {
        'phi': '61.8%',
      },
      maxWidth: {
        'phi': '61.8%',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};