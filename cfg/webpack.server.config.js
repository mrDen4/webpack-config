const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    externals: [nodeExternals()],
    module: {
        rules: [{ 
            test: /\.[jt]sx?$/, 
            use: "ts-loader" 
        }]
    }
};