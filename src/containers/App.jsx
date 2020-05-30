import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/general.scss';

import useFetch from '../hooks/useFetch';
import config from '../config';

const App = () => {

    const videos = useFetch(config.apiUrl);

    return (
        <div className="App">
            <Header/>
            <Search/>

            {videos.categories &&
                videos.categories.map((category, index) => {

                    if (category.videos.length > 0) {
                        return (
                            <Category title={category.title} key={index}>
                                <Carousel>
                                    {category.videos.map(video =>
                                        <CarouselItem {...video} key={video.id}/>
                                    )}
                                </Carousel>
                            </Category>
                        )
                    }

                })
            }
            
            <Footer/>
        </div>
    )
};

export default App;