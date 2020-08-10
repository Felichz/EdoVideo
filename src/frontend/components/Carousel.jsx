import React from 'react';

import '../assets/styles/components/carousel.scss';

const Carousel = ({ children }) => (
  <div className='carousel__container'>
    { children }
  </div>
);

export default Carousel;
