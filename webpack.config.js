module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js/script.ts",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "ts-loader" }
      }
    ]
  }
};
