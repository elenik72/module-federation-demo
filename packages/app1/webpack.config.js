const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    publicPath: "auto",
    filename: "[name]-[chunkhash].js",
    crossOriginLoading: 'anonymous',
    path: path.join(__dirname, "dist")
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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      remotes: {
        app2: "app2",
        app3: "app3",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      assets: false,
      moduleAssets: false,
      hash: false,
      chunks: false,
      modules: false,
      children: false,
      source: false,
      publicPath: false
    }
  },
};
