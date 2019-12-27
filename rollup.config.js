import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy';

const outputs = [
  { name: 'index.esm.js', format: 'es' },
  { name: 'index.js', format: 'commonjs', preferConst: true }
];

export default [
  {
    input: 'dist-transpiled/index.js',
    plugins: [
      resolve({
        dedupe: ['react', 'react-dom']
      }),
      sourcemaps(),
      copy({
        targets: [
          { src: 'dist-transpiled/components/Icon/icons/**/*', dest: 'dist/icons' }
        ]
      })
    ],
    external: (id) => !/^(\.|\/)/.test(id),
    output: outputs.map(({ name, format, sourcemap = true, preferConst = false }) => ({
      file: `dist/${name}`,
      format,
      sourcemap,
      preferConst,
      name: 'union'
    }))
  }
]
