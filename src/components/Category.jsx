import React from 'react';

import '../assets/styles/components/category.scss';

const Category = ({ children, title }) => (
    <section className="carousel">
        <h2 className="categories__title">{ title }</h2>
        { children }
    </section>
);

export default Category;