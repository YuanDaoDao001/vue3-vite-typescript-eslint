module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
