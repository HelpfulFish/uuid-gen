const Dotenv = require("dotenv-webpack");
const path = require("path");
const HWP = require('html-webpack-plugin'); 

module.exports = {

  output: {
    publicPath: "/",
  },

  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],

    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },

  plugins: [
    new Dotenv({ systemvars: true }), 
    new HWP({template: path.join(__dirname,'/src/index.html')})
  ],
};
