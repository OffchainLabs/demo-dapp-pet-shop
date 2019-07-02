const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src')
  }
};
