/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: 'rgb(var(--color-offwhite) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        stone: 'rgb(var(--color-stone) / <alpha-value>)',
        olive: 'rgb(var(--color-olive) / <alpha-value>)',
        'sand-light': 'rgb(var(--color-sand-light) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        'panel-strong': 'rgb(var(--color-panel-strong) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
