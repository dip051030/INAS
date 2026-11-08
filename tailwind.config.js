/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#050814',
          900: '#0a1128',
          850: '#0d1738',
          800: '#131f47',
          700: '#1c2b5f',
          gold: '#cba358',
          goldLight: '#dfc07a',
          goldBright: '#f5d992',
          goldDark: '#a37c35',
          crimson: '#c8102e',
          crimsonDark: '#990c23',
          cream: '#fbfcfd',
          sand: '#f4ede1',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.8s infinite linear',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        glowPulse: {
          '0%': { opacity: '0.3', transform: 'scale(0.96)' },
          '100%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(223, 192, 122, 0.3)',
        'gold-glow-lg': '0 0 50px -10px rgba(223, 192, 122, 0.25)',
        'card-elevated': '0 10px 30px -10px rgba(10, 17, 40, 0.08), 0 2px 8px -2px rgba(10, 17, 40, 0.04)',
        'card-hover': '0 20px 40px -12px rgba(10, 17, 40, 0.16), 0 4px 12px -2px rgba(10, 17, 40, 0.06)',
      }
    },
  },
  plugins: [],
}
