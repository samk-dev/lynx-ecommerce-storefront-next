module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        '8xl': '120rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
