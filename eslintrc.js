module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin','prettier'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': ['error',{'allowExpressions': true}],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto",
          "printWidth": 120,
          "tabWidth": 2,
          "useTabs": false,
          "trailingComma": "all",
          "singleQuote": true,
          "semi": true
        }
      ]
    },
  };