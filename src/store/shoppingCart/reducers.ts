import {
    ShoppingCartState,
    ShoppingCartActionTypes,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './types';

const initialState: ShoppingCartState = {};

export const shoppingCartReducer = (
    state = initialState,
    action: ShoppingCartActionTypes
): ShoppingCartState => {
    switch (action.type) {
        case ADD_TO_CART:
            if (action.productId in Object.keys(state)) {
                return {
                    ...state,
                    [action.productId]: state[action.productId] + 1
                };
            }
            return {
                ...state,
                [action.productId]: 0
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
        default:
            return state;
    }
};
