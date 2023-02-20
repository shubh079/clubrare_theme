module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',  './public/**/*.{html,js,jsx,ts,tsx}',
  './src/**/*.{html,js,jsx,ts,tsx}',
  './node_modules/tw-elements/dist/js/**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}