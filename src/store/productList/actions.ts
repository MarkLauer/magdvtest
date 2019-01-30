import { Product, RECEIVE_PRODUCTS } from './types';
import { getProducts } from '../../api';
import { Dispatch } from 'redux';

const receiveProducts = (products: Product[]) => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const fetchProducts = () => (dispatch: Dispatch) =>
    getProducts().then(products => dispatch(receiveProducts(products)));
