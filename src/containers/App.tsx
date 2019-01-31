import * as React from 'react';
import Header from '../components/Header';
import ProductListContainer from './ProductListContainer';
import Footer from '../components/Footer';

const App = () => (
    <div>
        <Header />
        <ProductListContainer />
        <Footer />
    </div>
);

export default App;
