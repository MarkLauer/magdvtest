import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import App from './App';

interface RootProps {
    store: Store;
}

const Root = ({ store }: RootProps) => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default hot(Root);
