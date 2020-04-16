import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            name: 'blockUtils',
            format: 'umd'
        },
        {
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins: [
        babel({
            exclude: ['node_modules/**']
        })
    ]
};
