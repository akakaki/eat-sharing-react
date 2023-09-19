const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = function override (config) {
  config.output.path = process.env.NODE_ENV === 'production'
    ? '/practice-react/'
    : '/'

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
  }

  config.plugins = [
    ...config.plugins,
    new WindiCSSWebpackPlugin({
      virtualModulePath: 'src',
    }),
  ]
  
  return config
}