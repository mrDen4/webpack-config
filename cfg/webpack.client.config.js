const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/client/index.tsx'),
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist/client'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
};