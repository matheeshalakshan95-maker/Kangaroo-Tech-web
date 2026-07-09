/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0a1a3c', 700: '#122a63' },
        purple: { DEFAULT: '#7c3aed', vivid: '#9b3ffb' },
        blue: { DEFAULT: '#0b5fff', light: '#4c8cff' },
        green: { DEFAULT: '#159c5f', dark: '#128a54' },
        ink: '#10192e',
        muted: '#5b6478',
        line: '#e2e6ef',
        surface: { 50: '#f5f7fb', 100: '#eef1f7' },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      maxWidth: { site: '1200px' },
      boxShadow: {
        card: '0 10px 40px rgba(10,26,60,0.08)',
        'card-lg': '0 20px 60px rgba(10,26,60,0.14)',
      },
      keyframes: {
        'gradient-drift': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        'blob-float-1': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-30px,26px) scale(1.12)' },
        },
        'blob-float-2': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(24px,-22px) scale(1.08)' },
        },
        'blob-float-3': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-18px,-18px) scale(0.92)' },
        },
        'text-shimmer': { to: { backgroundPosition: '-250% 0' } },
        'marquee-scroll': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'swoosh-draw': {
          '0%': { strokeDashoffset: '130', opacity: '0' },
          '25%': { opacity: '1' },
          '55%': { strokeDashoffset: '0', opacity: '1' },
          '85%': { strokeDashoffset: '0', opacity: '1' },
          '100%': { strokeDashoffset: '-130', opacity: '0' },
        },
        rise: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'gradient-drift': 'gradient-drift 14s ease-in-out infinite',
        'gradient-drift-slow': 'gradient-drift 16s ease-in-out infinite',
        'blob-1': 'blob-float-1 11s ease-in-out infinite',
        'blob-2': 'blob-float-2 13s ease-in-out infinite',
        'blob-3': 'blob-float-3 9s ease-in-out infinite',
        shimmer: 'text-shimmer 6s linear infinite',
        marquee: 'marquee-scroll 32s linear infinite',
        swoosh: 'swoosh-draw 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
