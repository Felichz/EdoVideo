import React from 'react';

import '../assets/styles/components/search.scss';

const Search = props => (
    <section className="search">
        <h2 className="search__title">¿What do you want to watch today?</h2>
        <input className="search__input" type="text" placeholder="Search" {...props}/>
    </section>
);

export default Search;