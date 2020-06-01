import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addVideoToCategory } from '../redux/actions';
import { removeVideoFromCategory } from '../redux/actions';

import playButton from '../assets/img/play-button.png';
import addButton from '../assets/img/add-button.png';
import removeButton from '../assets/img/remove-button.png';

const CarouselItem = props => {
    const { id, cover, title, year, contentRating, duration, userItem } = props;

    function handleSetFavorite() {
        props.addVideoToCategory(
            {
                cover,
                title,
                year,
                contentRating,
                duration
            },
            'My List'
        );
    }

    function handleRemoveFavorite() {
        props.removeVideoFromCategory(id, 'My List');
    }

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt="Thumbnail" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playButton} alt="Play" />
                    <img 
                        className="carousel-item__details--img"
                        src={userItem ? removeButton : addButton}
                        alt="Add"
                        onClick={userItem ? handleRemoveFavorite : handleSetFavorite}
                    />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--title">
                    {year} {contentRating} {duration} min
                </p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    year: propTypes.number,
    contentRating: propTypes.string,
    duration: propTypes.number
}

const mapDispatchToProps = {
    addVideoToCategory,
    removeVideoFromCategory
};

export default connect(null, mapDispatchToProps)(CarouselItem);