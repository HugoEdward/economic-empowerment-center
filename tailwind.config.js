/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070d1a',
          900: '#0f1729',
          800: '#162036',
          700: '#1e2d4a',
          600: '#2a3d5e',
        },
        gold: {
          DEFAULT: '#d4a853',
          light: '#e8c87a',
          dim: 'rgba(212, 168, 83, 0.12)',
          glow: 'rgba(212, 168, 83, 0.25)',
        },
        forest: {
          DEFAULT: '#2d8a5e',
          light: '#3aad78',
          dark: '#226b48',
          dim: 'rgba(45, 138, 94, 0.12)',
        },
        surface: {
          primary: '#edf0f7',
          secondary: '#b8c0d4',
          muted: '#6b7594',
          border: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-up-delay': 'fadeUp 0.7s ease-out 0.15s both',
        'fade-up-delay-2': 'fadeUp 0.7s ease-out 0.3s both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
