const path = require('path');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8000', './app/entry'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
};
