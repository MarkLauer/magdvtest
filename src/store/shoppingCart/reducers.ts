import {
    ShoppingCartState,
    ShoppingCartActionTypes,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_AMOUNT
} from './types';

const initialState: ShoppingCartState = {};

export const shoppingCartReducer = (
    state = initialState,
    action: ShoppingCartActionTypes
): ShoppingCartState => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state[action.productId]) {
                return {
                    ...state,
                    [action.productId]: state[action.productId] + 1
                };
            }
            return {
                ...state,
                [action.productId]: 1
            };
        case REMOVE_FROM_CART:
            if (state[action.productId] > 1) {
                return {
                    ...state,
                    [action.productId]: state[action.productId] - 1
                };
            }
            const { [action.productId]: value, ...rest } = state;
            return rest;
        case SET_PRODUCT_AMOUNT:
            return {
                ...state,
                [action.productId]: action.amount
            };
        default:
            return state;
    }
};
