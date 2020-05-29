import React from 'react';
import ReactDom from 'react-dom';

import App from './containers/App';

if (typeof document !== 'undefined') {
    ReactDom.render(
        <App/>,
        document.getElementById('root')
    );
}