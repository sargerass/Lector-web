const PurifyCSSPlugin = require('purifycss-webpack')

exports.purifyCSS = options => ({
  plugins: [new PurifyCSSPlugin(options)],
})
