import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (productId: number) => ({
    type: ADD_TO_CART,
    productId
});

export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    productId
});
