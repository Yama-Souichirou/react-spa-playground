const path = require("path");
const paths = require("./paths.js")
const WebpackAssetsManifest = require("webpack-assets-manifest");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  entry: {
    index: path.resolve(paths.srcDir, "index.tsx")
  },
  output: {
    path: path.resolve(paths.rootDir, "public", "packs"),
    publicPath: isProd ? "/packs/" : "//localhost:8081/packs/",
    filename: "[name]-[hash].js"
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
  plugins: [new WebpackAssetsManifest({ publicPath: true, writeToDisk: true })],
  devServer: {
    contentBase: path.resolve(paths.rootDir, "public"),
    publicPath: "/packs/",
    host: "localhost",
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
