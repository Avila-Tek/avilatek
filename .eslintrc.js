module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['avilatek-typescript'],
  rules: {
    '@typescript-eslint/no-use-before-define': [1],
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prefer-arrow-callback': 'off',
  },
};
