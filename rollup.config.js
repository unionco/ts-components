import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const outputs = [
  { name: 'index.esm.js', format: 'es' },
  { name: 'index.js', format: 'commonjs', preferConst: true }
];

export default [
  {
    input: 'dist-transpiled/index.js',
    plugins: [
      resolve(),
      sourcemaps()
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
