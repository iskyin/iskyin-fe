// eslint config for typescript
module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      spread: true,
      allowModules: true,
    },
  },
  plugins: ['typescript'],
  extends: ['../.eslintrc.js'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'typescript/member-delimiter-style': 'off',
    'typescript/no-unused-vars': 'warn',
    'typescript/adjacent-overload-signatures': 'warn',
    // 'typescript/type-annotation-spacing': 'error',
    'typescript/class-name-casing': 'error',
  },
}