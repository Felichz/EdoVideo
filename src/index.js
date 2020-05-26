import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from './components/HelloWorld';

if (typeof document !== 'undefined') {
    ReactDom.render(
        <HelloWorld/>,
        document.getElementById('root')
    );
}