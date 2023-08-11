module.exports = {
  root: true,
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {},
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json'
    ]
  }
}
