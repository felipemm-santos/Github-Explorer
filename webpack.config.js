const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry -> Arquivo de entrada
  // __dirname -> diretório do arquivo
  entry: path.resolve(__dirname, "src", "index.jsx"),
  // output -> arquivo de saída
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Lê js e jsx
  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
