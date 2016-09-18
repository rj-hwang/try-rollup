import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [json(), babel()],
  //dest: 'dist/bundle.js',
  targets: [
    { dest: 'dist/bundle.es.js', format: 'es' },
    { dest: 'dist/bundle.amd.js', format: 'amd' },
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.iife.js', format: 'iife', moduleName: 'main' },
    { dest: 'dist/bundle.umd.js', format: 'umd', moduleName: 'main' }
  ],
  sourceMap: true,  // default false, true|false|'inline'
  globals: {jquery: "$"},
  external: ["jquery"],
  indent: false,
  banner: '/* banner */',
  footer: '/* footer */',
  intro: '/* intro */',
  outro: '/* outro */'
};