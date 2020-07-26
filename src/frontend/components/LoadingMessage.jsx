import React from 'react';

import '../assets/styles/components/404.scss';
import '../assets/styles/components/loading-icon.scss';

// Reusing NotFoundMessage styles
const NotFoundMessage = () => (
    <section className="not-found pulse">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </section>
);

export default NotFoundMessage;
