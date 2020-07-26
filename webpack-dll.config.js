const path = require('path');
const webpack = require('webpack');

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
        filename: '[name].js',
        // Usamos el mismo nombre que el modulo para poder
        // importar la libreria globalmente de la misma manera
        library: '[name]',
    },
    module: {
        rules: [],
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json'),
        }),
    ],
};
