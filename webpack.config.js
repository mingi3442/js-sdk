const TerserPlugin = require("terser-webpack-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
          // "ts-loader"
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],

    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
      vm: require.resolve("vm-browserify"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyLibrary",
    libraryTarget: "var",
    globalObject: "this",
  },
  experiments: {
    outputModule: false,
  },
  devtool: false,
};

//
