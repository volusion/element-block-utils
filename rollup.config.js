import babel from 'rollup-plugin-babel';
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
      file: pkg.main,
      name: 'FOO',
      format: 'umd',
    },
        plugins: [
            babel({
                // babelrc: false,
                // presets: [['env', { modules: false }], 'stage-1', 'react'],
                // externalHelpers: true,
                exclude: ['node_modules/**']
            }),
            // resolve({
            //     browser: true
            // }),
            // commonjs(),
            // options.minify && uglify()
        ]
  // external: [
  //   ...Object.keys(pkg.dependencies || {}),
  //   ...Object.keys(pkg.peerDependencies || {}),
  // ],
}

