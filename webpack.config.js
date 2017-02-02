var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/javascripts/app.js',
    output: {
        path: "./build",
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.scss$/i, loader: ExtractTextPlugin.extract(["css", "sass"])},
            { test: /\.json$/i, loader: "json-loader"},
            { test: /\.sol/, loader: 'truffle-solidity' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './app/index.html', to: "index.html" },
            { from: './app/images', to: "images" },
            { from: './app/fonts', to: "fonts" }
        ]),
        new ExtractTextPlugin("app.css")
    ],
    devServer: {
        stats: 'errors-only',
    }
};