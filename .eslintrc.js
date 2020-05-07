module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'warn',
    "@typescript-eslint/no-var-requires": ['off'],
    "vue/html-indent": ['warn', 4, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-closing-bracket-spacing": ['off'],
    "vue/singleline-html-element-content-newline": ['off'],
    "vue/max-attributes-per-line": ['off'],
    "vue/html-closing-bracket-newline": ['off'],
    "@typescript-eslint/no-empty-function": "warn", //空方法警告
    "@typescript-eslint/no-unused-vars": "off", //未使用的方法参数
    "@typescript-eslint/no-explicit-any": "off", //禁止使用any
    "vue/valid-template-root": "off", //禁止使用any
  }
}
