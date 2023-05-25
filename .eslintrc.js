module.exports = {
  env: {
    node: true,
    jquery: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/this-in-template': 'off',
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/order-in-components': 'off',
    'vue/no-template-shadow': 'off',

    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}
