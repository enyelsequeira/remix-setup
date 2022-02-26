module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    version: 'detect', // Automatically detect the react version
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-cycle': 'off',

    'import/no-extraneous-dependencies': 'off',
    camelcase: 'off',
    'no-void': 'off',
    'vars-on-top': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'global-require': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-use-before-define': 'off',
    'no-var': 'off',
    'func-names': 'off',

    // meh...
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/alt-text': 'off', // it's not smart enough...
    '@babel/new-cap': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-namespace': 'off',

    // I can't figure these out:
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // enable these again someday:
    '@typescript-eslint/no-unsafe-argument': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    // for CatchBoundaries
    '@typescript-eslint/no-throw-literal': 'off',
  },
  ignorePatterns: ['dist/', 'build/', 'public/', 'node_modules/'],
};
