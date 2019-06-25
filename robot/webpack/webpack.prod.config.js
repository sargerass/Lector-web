const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const glob = require('glob')
const merge = require('webpack-merge')
const paths = require('./webpack.paths')
const modules = require('./webpack.modules')
const loaders = require('./webpack.loaders')
const plugins = require('./webpack.plugins')
const optimization = require('./webpack.optimization')

module.exports = ({ optImg, optOneBundle }) =>
  merge(
    {
      mode: 'production',
      output: {
        chunkFilename: `${paths.output.js}/[name].[chunkhash:8].js`,
        filename: `${paths.output.js}/[name].[chunkhash:8].js`,
      },
      performance: {
        hints: 'warning', // 'error' or false are valid too
        maxEntrypointSize: 100000, // in bytes
        maxAssetSize: 450000, // in bytes
      },
      plugins: [
        new StatsWriterPlugin({ fields: null, filename: '../stats.json' }),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
      ],
    },
    optOneBundle
      ? {}
      : {
          optimization: {
            splitChunks: {
              chunks: 'all',
            },
            runtimeChunk: 'single',
          },
        },
    optImg ? modules.optimizeImages() : {},
    optimization.minifyJS({
      terserOptions: {
        parse: {
          // we want terser to parse ecma 8 code. However, we don't want it
          // to apply any minfication steps that turns valid ecma 5 code
          // into invalid ecma 5 code. This is why the 'compress' and 'output'
          // sections only apply transformations that are ecma 5 safe
          // https://github.com/facebook/create-react-app/pull/4234
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebook/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          ascii_only: true,
        },
      },
      // Use multi-process parallel running to improve the build speed
      // Default number of concurrent runs: os.cpus().length - 1
      parallel: true,
      // Enable file caching
      cache: true,
    }),
    modules.loadJS({
      include: paths.context,
      options: {
        cacheDirectory: true,
      },
    }),
    modules.extractCSS({
      include: paths.context,
      use: [
        loaders.cssLoader({
          options: {
            localIdentName: '[hash:base64:5]',
            sourceMap: false,
          },
        }),
        loaders.postCSSAutoprefixerLoader,
        loaders.cssPreprocessorLoader,
      ],
      options: {
        filename: `${paths.output.css}/[name].[contenthash:8].css`,
        chunkFilename: `${paths.output.css}/[id].[contenthash:8].css`,
      },
    }),
    plugins.purifyCSS({
      paths: glob.sync(`${paths.context}/**/*.+(pug|js)`, { nodir: true }),
      styleExtensions: ['.css', '.scss'],
    }),
    optimization.minifyCSS({
      options: {
        discardComments: {
          removeAll: true,
        },
      },
    })
  )
