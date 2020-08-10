import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../assets/styles/components/search.scss';

import videoSearch from '../redux/reducers/videoSearch';

const Search = (props) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const result = videoSearch(props.categories, e.target.value);

      if (result) {
        props.history.push(`/play/${result.id}`);
      }
    }
  };

  return (
    <section className='search'>
      <h2 className='search__title'>¿What do you want to watch today?</h2>
      <input
        className='search__input'
        type='text'
        placeholder='Search'
        onKeyPress={handleSearch}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default withRouter(connect(mapStateToProps, null)(Search));
