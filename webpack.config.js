const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { BASE_URL } = process.env;

module.exports = {
    entry: [
        './src/frontend/index.js',

        // This connects to the server to receive notifications when the bundle rebuilds
        // and then updates your client bundle accordingly.
        'webpack-hot-middleware/client?reload=true',
    ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: BASE_URL || '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
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
                    },
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true, // Prevents default browser refresh on form submission and link change
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: './assets/app.css',
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(BASE_URL),
        }),
    ],
};
