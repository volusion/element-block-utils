module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'standard-react',
        'prettier',
        'prettier/react'
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    plugins: ['prettier'],
    rules: {
        'no-const-assign': 'error',
        'react/no-unused-prop-types': 'off',
        'no-var': 'error',
        semi: 'error',
        'prefer-const': 'error',
        'react/prop-types': ['skipUndeclared'],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'none'
            }
        ]
    }
};
