// webpack.config.js
// webpack.config.js
console.log("Reading Webpack configuration...");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
