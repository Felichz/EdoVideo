import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/general.scss';

import bgImage from '../assets/img/bg.jpeg';

const App = () => {
    const [video, setVideo] = useState([]);
    const [title, setTitle] = useState('Title');

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideo(data));
        console.log(video);
    }, []);

    useEffect(() => {
        document.title = title;
        console.log(title);
    }, [title]);

    return (
        <div className="App">
            <Header/>
            <Search value={title} onChange={e => setTitle(e.target.value)}/>
            <Category title="My List">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Category>

            <Category title="Originales de Edo Video">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Category>
            
            <Footer/>
        </div>
    )
};

export default App;