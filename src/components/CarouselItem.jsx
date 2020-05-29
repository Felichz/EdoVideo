import React from 'react';

import playButton from '../assets/img/play-button.png';
import addButton from '../assets/img/add-button.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/3009441/pexels-photo-3009441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Thumbnail" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playButton} alt="Play" />
                <img className="carousel-item__details--img" src={addButton} alt="Add" />
            </div>
            <p className="carousel-item__details--title">Descriptive title</p>
            <p className="carousel-item__details--title">2019 16+ 62 min</p>
        </div>
    </div>
);

export default CarouselItem;