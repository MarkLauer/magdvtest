import '@babel/polyfill';
import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import App from './App';

const store = configureStore();

let Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
Root = hot(Root);

render(<Root />, document.getElementById('root'));
