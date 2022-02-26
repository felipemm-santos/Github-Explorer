module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Configura o babel para não precisar importar o react em todos os arquivos jsx
      },
    ],
  ],
};
