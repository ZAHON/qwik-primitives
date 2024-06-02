/** @type {import('eslint').Linter.Config} */

module.exports = {
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': 'error',
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
    {
      files: ['**/*.astro/*.ts', '*.astro/*.ts'],
      env: {
        browser: true,
        es2020: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: null,
      },
      rules: {
        'no-unused-vars': 'error',
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
  ],
};
