const merge = require("webpack-merge");
const pages = require("./webpack/pages");
const linting = require("./webpack/linting");

module.exports = env => {
  process.env.NODE_ENV = env.NODE_ENV;

  const mode = env.NODE_ENV === "development" ? "dev" : "prod";
  const configPath = `./webpack/webpack.${mode}.config`;

  const webpackConfig = require(configPath);

  const commonConfigPath = `./webpack/webpack.common.config`;
  const commonWebpackConfig = require(commonConfigPath);

  return merge(commonWebpackConfig, webpackConfig({
    optImg: env.ENABLE_OPTIMIZE_IMAGES,
    optOneBundle: env.GENERATE_ONE_JS_BUNDLE
  }), ...pages, linting(env.ENABLE_LINT));
};
