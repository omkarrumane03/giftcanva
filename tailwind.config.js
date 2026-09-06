/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#151A1F',
          soft: '#3F4A54',
          muted: '#6B7885',
        },
        canvas: {
          DEFAULT: '#FBF9F6',
          deep: '#F3EFE9',
        },
        teal: {
          50: '#EAF7F8',
          100: '#CDEDF0',
          200: '#9DDCE2',
          300: '#63C4CE',
          400: '#2FA6B4',
          500: '#12889A',
          600: '#0B6E7E',
          700: '#0A5865',
          800: '#0B454F',
          900: '#0A363E',
        },
        coral: {
          50: '#FFF1F0',
          100: '#FFDEDB',
          200: '#FFBDB7',
          300: '#FF948B',
          400: '#F8695F',
          500: '#EE4C41',
          600: '#D6362C',
          700: '#B02A22',
          800: '#8C241E',
          900: '#71231F',
        },
        gold: {
          100: '#FBF1D8',
          200: '#F4DFA8',
          300: '#E9C86C',
          400: '#D9AC38',
          500: '#BE8F1E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(21, 26, 31, .04), 0 8px 24px -12px rgba(21, 26, 31, .18)',
        lift: '0 2px 6px rgba(21, 26, 31, .06), 0 24px 48px -20px rgba(21, 26, 31, .28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'pop-in': {
          from: { opacity: '0', transform: 'scale(.96) translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up .5s cubic-bezier(.22,1,.36,1) both',
        'pop-in': 'pop-in .28s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
}
