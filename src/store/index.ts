import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { productListReducer } from './productList/reducers';
import { shoppingCartReducer } from './shoppingCart/reducers';
import { filterReducer } from './filter/reducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    shoppingCart: shoppingCartReducer,
    filter: filterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () =>
    createStore(rootReducer, applyMiddleware(thunk, createLogger()));
