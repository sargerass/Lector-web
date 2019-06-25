const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

exports.minifyCSS = ({ options }) => ({
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: options,
        canPrint: true, // false for analyzer
      }),
    ],
  },
})

exports.minifyJS = options => ({
  optimization: {
    minimizer: [new TerserPlugin(options)],
  },
})
