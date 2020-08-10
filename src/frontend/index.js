import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

import MyProvider from './redux/MyProvider';

import App from './routes/App';

const isDev = process.env.NODE_ENV === 'development';
if (typeof document !== 'undefined') {
  const HotApp = hot(() => (
    <MyProvider>
      <App />
    </MyProvider>
  ));

  (isDev ? ReactDOM.render : ReactDOM.hydrate)(
    <HotApp />,

    document.getElementById('root'),
  );
}
