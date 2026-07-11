/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E51937',
          dark: '#C4122E',
          light: '#FF2A4A',
        },
        gold: {
          DEFAULT: '#FFC429',
          dark: '#E0A800',
          light: '#FFD45C',
        },
        navy: {
          DEFAULT: '#0B0B0B',
          light: '#111111',
          border: '#222222',
        },
        slate: {
          card: '#1A1A1A',
          hover: '#242424',
        },
        surface: {
          DEFAULT: '#131313',
          raised: '#1A1A1A',
          overlay: '#242424',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '10px',
        xl: '12px',
        '2xl': '14px',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 8s ease-in-out infinite',
        'float-3': 'float3 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(229, 25, 55, 0.2)' },
          '50%': { boxShadow: '0 0 28px rgba(229, 25, 55, 0.35)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
