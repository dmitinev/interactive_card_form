import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintJest from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tselint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tselint.config(
  {
    plugins: {
      '@typescript-eslint': tselint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      jest: eslintJest,
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'eslint.config.js',
      'templates',
    ],
  },
  js.configs.recommended,
  ...tselint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        ...globals.jest,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'warn',
      'no-undef': ['warn'],
      'no-console': ['warn'],
      'no-unused-vars': ['warn'],
      'prettier/prettier': ['off', { endOfLine: 'auto' }],
      '@typescript-eslint/no-var-requires': ['warn'],
      'react/react-in-tsx-scope': 'off',
      'no-empty-pattern': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.js'],
    extends: [tselint.configs.disableTypeChecked],
  },
  {
    files: ['**/?(*.)+(spec|test).[t]s?(x)'],
    rules: {
      ...eslintJest.configs.recommended.rules,
      'jest/no-focused-tests': 'off',
    },
  },
);
