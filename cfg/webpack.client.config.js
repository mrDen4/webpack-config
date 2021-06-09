const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_PROD) {
    return false;
  }

  if (IS_DEV) {
    return 'eval';
  }
}


module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
      path.resolve(__dirname, '../src/client/index.tsx'),
      'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    output: {
        filename: 'client.js',
        publicPath: '/static/',
        path: path.resolve(__dirname, '../dist/client'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV 
      ? [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
      ] : [],
};