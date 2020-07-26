import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';

const App = () => (
    <BrowserRouter basename={process.env.BASE_URL}>
        <MainRoutes />
    </BrowserRouter>
);

export default App;
