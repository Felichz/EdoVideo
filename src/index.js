import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './redux/reducers';

import config from './config';
import apiData from '../initialState.json';

import App from './routes/App';


function init(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, initialState, composeEnhancers());

    ReactDom.render(
        <Provider store={store}>
            <App/>
        </Provider>,

        document.getElementById('root')
    );
}

if (typeof document !== 'undefined') {
    // fetch(config.apiUrl)
    //     .then( response => response.json() )
    //     .then( initialState => init(initialState) );

    init(apiData);
}