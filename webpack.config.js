module.exports = {
  entry: __dirname + `/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: __dirname + `/client/dist`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname + `/client/dist`,
    compress: true,
    port: 8080
  }
};