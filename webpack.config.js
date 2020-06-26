const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_URL = process.env.BASE_URL || '/';

module.exports = (env) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: env.BASE_URL || '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'edovideo/assets/[hash].[ext]',
                    },
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true, // Prevents default browser refresh on form submission and link change
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './assets/[name].css',
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
        }),
    ],
});
