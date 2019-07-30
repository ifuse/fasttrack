module.exports = {
    root: true,

    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },

    env: {
        node: true
    },

    globals: {
        'cordova': true,
        'Velocity': true,
        'DEV': true,
        'PROD': true,
        '__THEME': true
    },

    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',

    // required to lint *.vue files
    plugins: [
        'html'
    ],

    // add your custom rules here
    'rules': [
        'plugin:vue/essential',
        '@vue/prettier',
        'eslint-auto-fix'

    ],

    rules: {
        'arrow-parens': 0,
        'one-var': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'brace-style': [
            2,
            'stroustrup',
            {
                allowSingleLine: true
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
