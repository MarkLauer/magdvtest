import * as React from 'react';
import Header from './Header';
import ProductListContainer from '../containers/ProductListContainer';
import Footer from './Footer';
import './App.scss';

const App = () => (
    <div className="page">
        <Header />
        <ProductListContainer />
        <Footer />
    </div>
);

export default App;
