const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE =  process.env.WEBPACK_ENV; // package.json의 ENV를 받는다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: { // 모듈을 발견할 때 마다,
    rules: [ // 규칙을 지정해준다.
      {
        test: /\.(scss)$/,
        // 모든 scss파일을 찾아준다.
        use: [ // webpack은 config파일에서, 아래에서 위로 실행을 한다.
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" }, // webpack이 css를 이해하도록 도와준다.
          {
            loader: "postcss-loader", // 특정plugin들을 css에 대해 실행시켜준다.
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    { overrideBrowserslist: "cover 99.5%" },
                  ]
                ]
              }
            }
          },
          {loader: "sass-loader"} // scss파일을 css로 옮겨준다.
        ]
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  }, //output은 object여야한다. 
  plugins: [
    new MiniCssExtractPlugin({
      // Option similar to the same option in webpackOptions.output
      // both options are optional
      filename: '[name].css'
    }),
  ]
};

module.exports = config