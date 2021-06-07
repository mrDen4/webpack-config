const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/client'),
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    module: {
        rules: [{ 
            test: /\.[jt]sx?$/, 
            use: "ts-loader" 
        }]
    },
};