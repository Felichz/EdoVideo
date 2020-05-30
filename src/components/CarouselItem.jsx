import React from 'react';
import propTypes from 'prop-types';

import playButton from '../assets/img/play-button.png';
import addButton from '../assets/img/add-button.png';

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt="Thumbnail" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playButton} alt="Play" />
                <img className="carousel-item__details--img" src={addButton} alt="Add" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--title">
                {year} {contentRating} {duration} min
            </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    year: propTypes.number,
    contentRating: propTypes.string,
    duration: propTypes.number
}

export default CarouselItem;