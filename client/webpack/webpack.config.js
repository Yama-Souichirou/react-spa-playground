const path = require("path");
const paths = require("./paths.js")
const WebpackAssetsManifest = require("webpack-assets-manifest");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  entry: {
    index: path.resolve(paths.srcDir, "index.tsx")
  },
  output: {
    path: path.resolve(paths.outputDir, "assets"),
    publicPath: isProd ? "/assets/" : "//localhost:8081/assets/",
    filename: "js/[name]-[hash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackAssetsManifest({ publicPath: true, writeToDisk: true }),
    new HtmlWebpackPlugin({
      title: "R-Management",
      filename: path.resolve(paths.outputDir, "index.html"),
    })
  ],
  devServer: {
    contentBase: paths.outputDir,
    writeToDisk: true,
    publicPath: "/assets/",
    host: "localhost",
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
