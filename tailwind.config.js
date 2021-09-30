module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        9: '2.25rem',
        24: '6rem',
        96: '24rem',
      },
      minWidth: {
        24: '6rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
