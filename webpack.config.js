var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/main'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        colors: true,
        progress: true
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['ts-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['css-loader', 'sass-loader']
                // loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};