const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "[name]-[chunkhash].js",
    publicPath: "auto",
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      shared: [
        "react",
        "react-dom"
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      "Access-Control-Allow-Headers": "X-Request"
    },
    stats: {
      assets: false,
      moduleAssets: false,
      hash: false,
      chunks: false,
      modules: false,
      children: false,
      source: false,
      publicPath: false,
    }
  },
};
