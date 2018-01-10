const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'pages.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    port: 9000
  }
};
