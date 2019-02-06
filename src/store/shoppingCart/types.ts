export interface ShoppingCartState {
    [productId: number]: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT';

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    productId: number;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    productId: number;
}

interface SetProductAmountAction {
    type: typeof SET_PRODUCT_AMOUNT;
    productId: number;
    amount: number;
}

export type ShoppingCartActionTypes =
    | AddToCartAction
    | RemoveFromCartAction
    | SetProductAmountAction;
