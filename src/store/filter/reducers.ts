import {
    FilterActionTypes,
    FilterState,
    Order,
    SET_FILTER,
    View
} from './types';

const initialState: FilterState = {
    category: [],
    kind: [],
    flavor: [],
    order: Order.Position,
    view: View.Tile
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
