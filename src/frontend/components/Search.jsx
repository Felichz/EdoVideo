import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/components/search.scss';

const Search = (props) => {
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const result = videoSearch(props.categories, e.target.value);

            if (result) {
                props.history.push('/play/' + result.id);
            }
        }
    };

    return (
        <section className="search">
            <h2 className="search__title">¿What do you want to watch today?</h2>
            <input
                className="search__input"
                type="text"
                placeholder="Search"
                onKeyPress={handleSearch}
            />
        </section>
    );
};

import levenshtein from '../utils/levenshtein';

const videoSearch = (categories, query) => {
    let foundVideo = undefined;

    categories.find((category) => {
        return category.videos.find((video) => {
            if (levenshtein(query, video.title) <= 5) {
                foundVideo = video;
                return true;
            }
        });
    });

    return foundVideo;
};

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default withRouter(connect(mapStateToProps, null)(Search));
