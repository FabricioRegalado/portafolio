module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EA6D73',
          light: '#F4878C',
          dark: '#D85C62',
        },
        secondary: '#0F172A',
        surface: '#25222D',
        panel: '#FFFFFF',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 10px 28px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
};
