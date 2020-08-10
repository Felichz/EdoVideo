const path = require('path');
const webpack = require('webpack');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    // Aqui seleccionamos las dependencias core
    entry: {
        modules: [
            'history',
            'md5',
            'prop-types',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-config',
            'react-router-dom',
            'redux',
        ],
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-[hash].js',
        // Usamos el mismo nombre que el modulo para poder
        // importar la libreria globalmente de la misma manera
        library: '[name]',
    },
    module: {
        rules: [],
    },
    plugins: [
        new ManifestPlugin({ fileName: 'dll-manifest.json' }),
        new TerserPlugin(),
        new CompressionWebpackPlugin({
            test: /\.(js)$/,
            filename: '[path].gz',
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json'),
        }),
    ],
};
