// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard',
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'no-new': 'off',
        'space-infix-ops': 'off',
        'standard/object-curly-even-spacing': 'off',
        'vue/max-attributes-per-line': 'off',
        'no-trailing-spaces': 'off',
        // 'space-before-function-paren': 'off',
        semi: 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'prefer-template': 'error',
        // vue rules
        'vue/require-valid-default-prop': 'off',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/attributes-order': 'off',
        'vue/camelcase': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'never',
                },
                svg: 'never',
                math: 'never',
            },
        ],
        "vue/component-name-in-template-casing": ["error",
            "kebab-case",
            {
                "ignores": []
            }
        ],
        indent: 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'camelcase': 'off'
    },
}