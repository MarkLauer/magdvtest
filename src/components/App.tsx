import * as React from 'react';
import Main from './Main';
import Footer from './Footer';
import './App.scss';
import HeaderContainer from '../containers/HeaderContainer';

const App = () => (
    <div className="page">
        <HeaderContainer />
        <Main />
        <Footer />
    </div>
);

export default App;
