var path = require('path');


module.exports = {
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'systreKey.js',
    library: 'systreKey',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  }
}
