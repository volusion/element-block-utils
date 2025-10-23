module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
        },
    },
    extends: ['eslint:recommended', 'standard-react', 'prettier'],
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    plugins: ['prettier'],
    rules: {
        'no-const-assign': 'error',
        'react/no-unused-prop-types': 'off',
        'no-var': 'error',
        semi: 'error',
        'prefer-const': 'error',
        'react/prop-types': [0],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'none',
            },
        ],
    },
};
