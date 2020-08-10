import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/general.scss';

const Home = ({ categories }) => {

  return (
    // React Fragment
    <>
      <Search />

      {categories.map((category) => {
        if (category.videos.length > 0) {
          return (
            <Category title={category.title} key={category.title}>
              <Carousel>
                {category.videos.map((video) => (
                  <CarouselItem
                    video={video}
                    userItem={category.userList}
                    key={video.id}
                  />
                ))}
              </Carousel>
            </Category>
          );
        }
        return false;
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const connectCategories = connect(mapStateToProps);

export default connectCategories(Home);
