import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCT_AMOUNT } from './types';

export const addToCart = (productId: number) => ({
    type: ADD_TO_CART,
    productId
});

export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    productId
});

export const setProductAmount = (productId: number, amount: number) => ({
    type: SET_PRODUCT_AMOUNT,
    productId,
    amount
});
