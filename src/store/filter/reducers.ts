import { FilterState, FilterActionTypes, Order, SET_FILTER } from './types';

const initialState: FilterState = {
    category: '',
    kind: '',
    flavor: '',
    order: Order.Position
};

export const filterReducer = (
    state = initialState,
    action: FilterActionTypes
): FilterState => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
