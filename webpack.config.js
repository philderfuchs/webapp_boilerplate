var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/js/app.js",
    output: {
        path: __dirname + "/build/js",
        publicPath: '/build/js/',
        filename: "app.bundle.js"
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        port: 8080
    },
    devtool: 'source-map'
};