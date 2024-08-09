/* prettier-ignore */

module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'unicorn'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          camelCase: true,
        },
      },
    ],
    quotes: ['error', 'single']
  },
  overrides: [],
};
