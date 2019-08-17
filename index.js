module.exports = {
  extends: [
    'plugin:wc/best-practice',
    'eslint:recommended',
    'google',
    require.resolve('./src/eslint-plugin-wc-export')
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true
  },
  plugins: ['html'],
  rules: {
    'require-jsdoc': 0,
    'comma-dangle': 0,
    'new-cap': ['error', { properties: false, capIsNew: false }],
    'max-len': ['error', { code: 120 }],
    'object-curly-spacing': ['error', 'always']
  },
  overrides: [
    {
      files: ['**/test/**/*.js', '**/demo/**/*.js', '**/test/**/*.html', '**/demo/**/*.html', '**/stories/**/*.js'],
      rules: {
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'class-methods-use-this': 'off'
      }
    }
  ]
};
