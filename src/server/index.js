require('ignore-styles');

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

// require('asset-require-hook')({
//     extensions: ['png', 'svg', 'jpg', 'gif', 'jpeg', 'mp4'],
//     name: 'assets/img/[name].[ext]',
// });

require('./server');
