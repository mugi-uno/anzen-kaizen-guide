const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js/script.ts",
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
