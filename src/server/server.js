const express = require('express');
const webpack = require('webpack');

const path = require('path');
require('dotenv').config();
const debug = require('debug')('app:server');

const getManifest = require('./utils/getManifest');

// Middlewares
const helmet = require('helmet');
const gzipStatic = require('connect-gzip-static');

// Webpack Developing Middlewares
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
const isDev = NODE_ENV === 'development';

function setResponse(html, preloadedState, hashManifest) {
    const mainCss = isDev ? '/assets/app.css' : hashManifest['main.css'];
    // const modulesJs = isDev ? 'modules.js' : hashManifest['modules.js'];
    const vendorsJs = isDev ? 'vendors.js' : hashManifest['vendors.js'];
    const mainJs = isDev ? '/app.js' : hashManifest['main.js'];

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="${mainCss}">
            <title>Edo Video</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script defer>
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                    preloadedState
                ).replace(/</g, '\\u003c')}
            </script>
            ${
                NODE_ENV !== 'development'
                    ? `<script src="${vendorsJs}" defer></script>`
                    : ''
            }
            <script src="${mainJs}" defer></script>
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
        res.send(setResponse(html, initialState, req.hashManifest));
    }
}

// Start App
const app = express();

app.use(helmet());

app.use((req, res, next) => {
    getManifest()
        .then((data) => {
            req.hashManifest = data;
            next();
        })
        .catch(() => next());
});

if (isDev) {
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
    const ONE_DAY = 86400000;

    app.use(gzipStatic(path.resolve('public'), { maxAge: ONE_DAY }));
}

app.get('*', renderApp);

app.listen(PORT, (err) => {
    debug(err || `Server listening on port ${PORT}`);
});
