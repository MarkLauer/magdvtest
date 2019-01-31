import { RECEIVE_PRODUCTS } from './types';
import { getProducts } from '../../api';
import { Dispatch } from 'redux';

export const receiveProducts = () => (dispatch: Dispatch) =>
    getProducts().then(products =>
        dispatch({
            type: RECEIVE_PRODUCTS,
            products
        })
    );
