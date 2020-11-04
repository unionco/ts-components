import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import alias from '@rollup/plugin-alias';
import sourcemaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const outputs = [
  { name: 'index.esm.js', format: 'es' },
  { name: 'index.js', format: 'commonjs', preferConst: false },
];

export default [
  {
    input: 'src/index.ts',
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      sourcemaps(),
      copy({
        targets: [{ src: 'src/components/Icon/icons/**/*', dest: 'dist/icons' }],
      }),
      // alias({
      //   entries: [
      //     { find: 'swiper', replacement: './node_modules/swiper/js/swiper.js' },
      //     { find: 'swipercss', replacement: './node_modules/swiper/css/swiper.css' },
      //   ],
      // }),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    external: (id) => !/^(\.|\/)/.test(id),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'union',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        name: 'union',
      },
    ],
  },
];
