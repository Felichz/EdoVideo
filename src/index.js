import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers/index';

import config from './config';

import App from './routes/App';


function init(initialState) {

    const store = createStore(reducer, initialState);

    ReactDom.render(
        <Provider store={store}>
            <App/>
        </Provider>,

        document.getElementById('root')
    );
}

if (typeof document !== 'undefined') {
    fetch(config.apiUrl)
        .then( response => response.json() )
        .then( initialState => init(initialState) );
}