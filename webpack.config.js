const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    publicPath: "/build/",
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000/",
      "/auth": "http://localhost:3000",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "/build/main.css" },
              },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
