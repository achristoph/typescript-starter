var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/app/main.ts",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/, loader: "tslint"
      }
    ],
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  },
  tslint: {
  }
};
