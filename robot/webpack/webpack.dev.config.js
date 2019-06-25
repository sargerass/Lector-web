const webpack = require('webpack')
const merge = require('webpack-merge')
const modules = require('./webpack.modules')
const loaders = require('./webpack.loaders')
const paths = require('./webpack.paths')

const devServer = ({ host, port } = {}) => ({
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    publicPath: paths.output.publicPath,
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host, // Defaults to `localhost`
    port, // Defaults to 8080

    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: false,
    },
  },
})

module.exports = () =>
  merge(
    {
      mode: 'development',
      devtool: 'source-map',
    },
    devServer({
      host: process.env.HOST,
      port: process.env.PORT,
    }),
    modules.exposeJQuery(),
    modules.loadCSS({
      include: paths.context,
      use: [
        loaders.cssLoader({
          options: {
            localIdentName: '[hash:base64:5]',
            sourceMap: true,
          },
        }),
        loaders.cssPreprocessorLoader,
      ],
    }),
    modules.loadJS({
      include: paths.context,
      options: {
        cacheDirectory: true,
      },
    })
  )
