import React from 'react';

import '../assets/styles/components/404.scss';
import '../assets/styles/components/loading-icon.scss';

// Reusing NotFoundMessage styles
const NotFoundMessage = () => (
  <section className='not-found pulse'>
    <div className='spinner'>
      <div className='double-bounce1' />
      <div className='double-bounce2' />
    </div>
  </section>
);

export default NotFoundMessage;
