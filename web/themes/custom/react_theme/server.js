const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
