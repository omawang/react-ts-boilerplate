module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-unreachable': 'off',
    'no-plusplus': 'off',
    'no-useless-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-console': 'off',
    'nonblock-statement-body-position': 'off',
    curly: 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
