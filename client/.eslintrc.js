module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/prefer-default-export": "off",
    "indent": ["error", 4],
    "no-console": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
