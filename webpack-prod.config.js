const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { BASE_URL } = process.env;

module.exports = {
    entry: './src/frontend/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'trash'),
        filename: '../public/app.js',
        publicPath: BASE_URL || '/',
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
                        name: 'assets/img/[name].[ext]',
                        limit: 0,
                        publicPath: '/',
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/app.css',
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(BASE_URL),
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json'),
            name: 'modules',
        }),
    ],
};
