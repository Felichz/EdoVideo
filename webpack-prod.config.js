const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const { BASE_URL } = process.env;

module.exports = {
    entry: './src/frontend/index.js',
    mode: 'production',
    output: {
        path: path.resolve('public'),
        filename: 'app-[hash].js',
        publicPath: BASE_URL || '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: 'vendor-[contentHash].js',
                    enforce: true,
                    test(module, chunks) {
                        const name =
                            module.nameForCondition &&
                            module.nameForCondition();
                        return chunks.some(
                            (chunk) =>
                                chunk.name !== 'vendors' &&
                                /[\\/]node_modules[\\/]/.test(name)
                        );
                    },
                },
            },
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
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
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
        new CompressionWebpackPlugin({
            test: /\.(js|css)$/,
            filename: '[path].gz',
        }),
        new MiniCssExtractPlugin({
            filename: './assets/app-[hash].css',
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(BASE_URL),
        }),
        // new webpack.DllReferencePlugin({
        //     manifest: require('./modules-manifest.json'),
        //     name: 'modules',
        // }),
    ],
};
