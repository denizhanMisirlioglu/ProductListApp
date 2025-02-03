// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript için parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript önerileri
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Prettier kurallarını ESLint hatası olarak göster
    // İsteğe bağlı: diğer özel kurallarınızı buraya ekleyebilirsiniz
  },
};
