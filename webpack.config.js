const path = require('path');
const env = require('yargs').argv.env;

let mode, name;
if (env === 'prod') {
  mode = 'production';
  name = 'trusti-sdk.min.js';
} else {
  mode = 'development';
  name = 'trusti-sdk.js';
}

module.exports = {
  mode: mode,
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: name,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
