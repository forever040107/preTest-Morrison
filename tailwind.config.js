module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0.3125rem',
      md: '0.625rem',
      lg: '0.9375rem',
      full: '9999px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
