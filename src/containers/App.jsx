import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/general.scss';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => {
                setVideos(data);
            });
    }, []);

    if (videos.categories) {
        videos.categories.map(category => {
            console.log(category.title);
        });
    }

    return (
        <div className="App">
            <Header/>
            <Search/>

            {videos.categories &&
                videos.categories.map((category, index) => 

                    <Category title={category.title} key={index}>
                        <Carousel>
                            {category.videos.map(video =>
                                <CarouselItem {...video}/>
                            )}
                        </Carousel>
                    </Category>

                )
            }
            
            <Footer/>
        </div>
    )
};

export default App;