import * as React from 'react';
import FilterContainer from '../containers/FilterContainer';
import ProductListContainer from '../containers/ProductListContainer';
import './Main.scss';

const Main = () => (
    <main className="main">
        <div className="main__breadcrumbs">
            Главная{' '}
            <i className="fas fa-angle-right main__breadcrumbs_icon" />{' '}
            Вафли
        </div>
        <div className="main__container">
            <FilterContainer />
            <ProductListContainer />
        </div>
    </main>
);

export default Main;
