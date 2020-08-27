/**
 * 사용하려면 설치한다.
 * npm i --save-dev stylelint stylelint-config-recommended stylelint-scss stylelint-webpack-plugin
 * webpack.config.js 파일에 추가
 *   const StyleLintPlugin = require('stylelint-webpack-plugin');
 *   const config = {
 *     ...
 *     plugins: [
 *       ...
 *       new StyleLintPlugin()
 *     ]
 *   }
 */

module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-scss'],
}
