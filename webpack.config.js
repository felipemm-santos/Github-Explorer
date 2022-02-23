const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// Controla se o programa será executado em modo de desenvolvimento ou produção
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
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(), // retorna falso se não estiver em desenvolvimento
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean), // tira valores boobleanos do array

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
