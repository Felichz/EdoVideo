const express = require('express');
const path = require('path');
require('dotenv').config();
const debug = require('debug')('app:server');

const app = express();

// Webpack
const webpack = require('webpack');
// Webpack
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// React stuff
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import MainRoutes from '../frontend/routes/MainRoutes';

// React Redux stuff
import MyProvider from '../frontend/redux/MyProvider';
import initialState from '../frontend/redux/initialState.json';

const { NODE_ENV, PORT } = process.env;

debug('NODE_ENV: ' + NODE_ENV);

function setResponse(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/assets/app.css">
            <title>Edo Video</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                    preloadedState
                ).replace(/</g, '\\u003c')}
            </script>
            ${
                NODE_ENV !== 'development'
                    ? '<script src="/modules.js"></script>'
                    : ''
            }
            <script src="/app.js"></script>
        </body>
        </html>
    `;
}

function renderApp(req, res) {
    const context = {};

    const html = renderToString(
        <MyProvider initialState={initialState}>
            <StaticRouter location={req.url} context={context}>
                <MainRoutes />
            </StaticRouter>
        </MyProvider>
    );

    if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        redirect(context.url);
    } else {
        // we're good, send the response
        res.send(setResponse(html, initialState));
    }
}

if (NODE_ENV === 'development') {
    const webpackConfig = require('../../webpack.config');

    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            port: PORT,
            hot: true,
            publicPath: webpackConfig.output.publicPath,
        })
    );
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use(express.static(path.resolve('public')));
}
// app.use('/assets/img', express.static(path.resolve('dist', 'assets', 'img')));

app.get('*', renderApp);

app.listen(PORT, (err) => {
    debug(err || `Server listening on port ${PORT}`);
});
