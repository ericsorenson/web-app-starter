module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['prettier', 'react', 'jsx-a11y', 'jest', 'sort-keys-fix'],
  rules: {},
  settings: {
    react: {
      version: '16.8.6',
    },
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
