const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",

  // Facilita para encontrar erros no programa
  devtool: isDevelopment ? "eval-source-map" : "source-map",

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
  //  cria um servidor de desenvolvimento para atualizar automaticamente as mudanças no código
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
