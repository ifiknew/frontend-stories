const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
export default {
  dest: '/docs',
  indexHtml: path.join(__dirname, '/template/index.ejs'),
  onCreateWebpackChain: (config) => {
    return config
      .plugin('CopyWebpackPlugin')
      .use(
        CopyWebpackPlugin,
        [
          [
            { from: path.join(__dirname, '/template/404.html'), to: path.join(__dirname, '/docs/404.html'), toType: 'file' }
          ]
        ]
      )
  }
}