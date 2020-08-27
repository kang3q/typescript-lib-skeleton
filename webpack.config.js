const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')

const isProduction = process.env.NODE_ENV === 'production'
const FILENAME = pkg.libName + (isProduction ? '.min' : '')

const BANNER = [
  'kang3q test',
  '@version ' + pkg.version + ' | ' + new Date().toDateString(),
  '@author ' + pkg.author,
  '@license ' + pkg.license,
].join('\n')

const config = {
  entry: './src/index.ts',
  output: {
    library: ['kang3q'], // 라이브러리 네임스페이스 설정
    libraryTarget: 'umd', // 라이브러리 타겟 설정
    //libraryExport: 'default', // 엔트리 포인트의 default export를 네임스페이스에 설정하는 옵션
    path: path.join(__dirname, 'dist'),
    filename: FILENAME + '.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: BANNER,
      entryOnly: true,
    }),
  ],
}

module.exports = config
