import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config: webpack.Configuration = {
  entry: "./src/main.ts",
  mode: "development",
  output: {
    filename: "vue-router.js",
    path: path.resolve("dist/webpack"),
    libraryTarget: "umd",
    libraryExport: "default",
    library: "VueRouter",
  },
  resolve: {
    alias: {},
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: [path.resolve("node_modules")],
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
  ],
  devServer: {
    port: 9527,
  },
};
module.exports = config;
