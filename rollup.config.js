import babel from 'rollup-plugin-babel';

export default {
    input: `src/${process.env.entry}.js`,
    output: [
        {
            file: `${process.env.entry}.js`,
            name: 'blockUtils',
            format: 'umd'
        },
        {
            file: `${process.env.entry}.module.js`,
            format: 'esm'
        }
    ],
    plugins: [
        babel({
            exclude: ['node_modules/**']
        })
    ]
};
