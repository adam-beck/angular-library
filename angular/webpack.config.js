var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  externals: {
    "angular": "angular"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.html/,
      include: /src/,
      loaders: ['html']
    }]
  }
};
