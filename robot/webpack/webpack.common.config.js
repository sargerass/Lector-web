const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const BundleTracker = require('webpack4-bundle-tracker')
const modules = require('./webpack.modules')
const merge = require('webpack-merge')
const yamlParser = require('require-yml')
const paths = require('./webpack.paths')

module.exports = merge(
  {
    context: paths.context,
    devServer: {
      disableHostCheck: true,
      headers: {
        // para trabajar con django
        'Access-Control-Allow-Origin': '*',
      },
    },
    resolve: {
      unsafeCache: true,
      symlinks: false,
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: paths.output.path,
      publicPath: paths.output.publicPath,
    },
    plugins: [
      new FriendlyErrorsPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new BundleTracker({
        path: paths.output.path,
        filename: 'webpack-stats.json',
      }),
    ],
  },
  modules.loadPug(),
  modules.loadImages({
    options: {
      limit: 15000,
      name: `[path][name].[hash:8].[ext]`,
    },
  }),
  modules.loadFonts({
    include: paths.context,
    options: {
      name: `${paths.output.fonts}/[name].[hash:8].[ext]`,
    },
  })
)
