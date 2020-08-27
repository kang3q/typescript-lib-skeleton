// 설치 방법
// npm i -D eslint eslint-loader @typescript-eslint/parser @typescript-eslint/eslint-plugin

module.exports = {
  root: true,
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: 'tsconfig.json',
    //project: ['tsconfig.json', 'tsconfig.eslint.json'],
  },
  rules: {
    'no-console': 'warn',
  },
}
