//const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        resolve: {
            extensions: ['','.js','.jsx']
        },
        filename: 'index.js'
    },
    devServer: {
         contentBase: './examples/main'
    },
};