const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './public/favicon.ico'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ]
  }
}

module.exports = () => {
  // if (isProduction) {
  //   config.mode = "production";
  //   // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  // } else {
  //   config.mode = "development";
  // }
  return config
}
