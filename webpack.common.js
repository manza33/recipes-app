const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackTemplate = require("html-webpack-template");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Recipes App",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
      inject: true,
      template: htmlWebpackTemplate,
      links: [
        "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap",
      ],
      bodyHtmlSnippet:
        '<header class="header" id="header"></header><main id=main><ul class="recipes-list" id="recipes-list" ></ul></main>',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
