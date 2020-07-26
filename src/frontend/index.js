import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';

import MyProvider from './redux/MyProvider';

import App from './routes/App';

if (typeof document !== 'undefined') {
    const HotApp = hot(() => (
        <MyProvider>
            <App />
        </MyProvider>
    ));

    ReactDom.hydrate(
        <HotApp />,

        document.getElementById('root')
    );
}
