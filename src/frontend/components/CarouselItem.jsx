import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addVideoToCategory, removeVideoFromCategory } from '../redux/actions';

import playButton from '../assets/img/play-button.png';
import addButton from '../assets/img/add-button.png';
import removeButton from '../assets/img/remove-button.png';

import config from '../config';

const CarouselItem = (props) => {
  const { video, userItem } = props;
  const { id, cover, title, year, contentRating, duration } = video;

  const handleSetFavorite = ({ target }) => {
    // This validation prevents the button work when it is invisible
    if (target.getBoundingClientRect().width >= 45) {
      props.addVideoToCategory(video, config.userFavoriteList);
    }
  };

  const handleRemoveFavorite = ({ target }) => {
    if (target.getBoundingClientRect().width >= 45) {
      props.removeVideoFromCategory(id, config.userFavoriteList);
    }
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='Thumbnail' />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/play/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playButton}
              alt='Play'
            />
          </Link>
          <img
            className='carousel-item__details--img'
            src={userItem ? removeButton : addButton}
            alt={userItem ? 'Remove' : 'Add'}
            onClick={
              userItem ? handleRemoveFavorite : handleSetFavorite
            }
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--title'>
          {year}
          {' '}
          {contentRating}
          {' '}
          {duration}
          {' '}
          min
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

const mapDispatchToProps = {
  addVideoToCategory,
  removeVideoFromCategory,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
