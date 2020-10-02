const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
};
