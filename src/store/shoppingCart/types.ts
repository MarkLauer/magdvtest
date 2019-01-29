export interface ShoppingCartState {
    [productId: string]: number;
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    productId: number;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    productId: number;
}

export type ShoppingCartActionTypes = AddToCartAction | RemoveFromCartAction;
