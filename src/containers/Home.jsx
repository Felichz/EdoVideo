import React, { useState } from 'react';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/general.scss';

import { connect } from 'react-redux';


const Home = props => {

    const { categories } = props;
    
    return (
        // React Fragment
        <>
            <Search/>

            {categories.map((category, index) => {

                if (category.videos.length > 0) {
                    return (
                        <Category title={category.title} key={index}>
                            <Carousel>
                                {category.videos.map(video =>
                                    <CarouselItem {...video} userItem={category.userList} key={video.id}/>
                                )}
                            </Carousel>
                        </Category>
                    )
                }

            })}
        </>
    )
};

const mapStateToProps = state => ({
    categories: state.categories
});

const connectCategories = connect(mapStateToProps);

export default connectCategories(Home);