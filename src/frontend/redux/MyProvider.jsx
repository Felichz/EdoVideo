import React from 'react';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

const MyProvider = (props) => {
    if (typeof window !== 'undefined') {
        // Client side store

        const preloadedState = window.__PRELOADED_STATE__;

        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        var store = createStore(reducer, preloadedState, composeEnhancers());

        delete window.__PRELOADED_STATE__;
    } else {
        // Server side store

        var store = createStore(reducer, props.initialState);
    }

    return <Provider store={store}>{props.children}</Provider>;
};

export default MyProvider;
