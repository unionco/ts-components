import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy';
import babel from "rollup-plugin-babel";
import alias from '@rollup/plugin-alias';

const outputs = [
  { name: 'index.esm.js', format: 'es' },
  { name: 'index.js', format: 'commonjs', preferConst: false }
];

export default [
  {
    input: 'dist-transpiled/index.js',
    plugins: [
      resolve({
        dedupe: ['react', 'react-dom']
      }),
      babel(),
      sourcemaps(),
      copy({
        targets: [
          { src: 'dist-transpiled/components/Icon/icons/**/*', dest: 'dist/icons' }
        ]
      }),
      alias({
        entries: [
          { find: 'swiper', replacement: './node_modules/swiper/js/swiper.js' },
          { find: 'swipercss', replacement: './node_modules/swiper/css/swiper.css' }
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
