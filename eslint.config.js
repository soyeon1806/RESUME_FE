import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
  {
    files: [
      '**/*.test.{js,ts,tsx}',
      '**/__tests__/**/*.{js,ts,tsx}',
      'src/setupTests.ts',
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
  },
);
