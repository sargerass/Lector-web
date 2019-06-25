exports.cssPreprocessorLoader = { loader: 'fast-sass-loader' }

exports.postCSSAutoprefixerLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')],
  },
}

exports.cssLoader = ({ options }) => ({
  loader: 'css-loader',
  options,
})
