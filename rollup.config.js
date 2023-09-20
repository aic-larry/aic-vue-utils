import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel';
export default {
  input: './src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'dist/aic-vue-utils.cjs.js',
      name: 'avutils'
    },
    {
      format: 'esm',
      file: 'dist/aic-vue-utils.esm.js',
      name: 'avutils'
    },
    {
      format: 'umd',
      file: 'dist/aic-vue-utils.umd.js',
      name: 'avutils',
      minifyInternalExports: true
    },
  ],
  plugins: [
    resolve(),
    babel({ // 使用 Babel 插件
      exclude: 'node_modules/**', // 排除 node_modules 文件夹
      presets: ['@babel/preset-env'] // 使用 Babel 预设
    })
  ]
}