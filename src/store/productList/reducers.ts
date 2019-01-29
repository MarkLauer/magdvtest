import {
    ProductListState,
    ProductListActionTypes,
    RECEIVE_PRODUCTS
} from './types';

const initialState: ProductListState = {
    products: []
};

export const productListReducer = (
    state = initialState,
    action: ProductListActionTypes
): ProductListState => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                products: action.products
            };
        default:
            return state;
    }
};
