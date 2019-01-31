import {
    FilterActionTypes,
    FilterState,
    Order,
    View,
    SET_CATEGORY_FILTER,
    SET_KIND_FILTER,
    SET_FLAVOR_FILTER,
    SET_ORDER_FILTER,
    SET_VIEW_FILTER
} from './types';

const initialState: FilterState = {
    categories: [],
    kinds: [],
    flavors: [],
    order: Order.Position,
    view: View.Tile
};

enum MultipleFilterField {
    categories = 'categories',
    kinds = 'kinds',
    flavors = 'flavors'
}

const setMultipleFilter = (
    field: MultipleFilterField,
    state: FilterState,
    filterToSet: string
) => {
    if (state[field].includes(filterToSet)) {
        return {
            ...state,
            [field]: state[field].filter(element => element !== filterToSet)
        };
    }
    return {
        ...state,
        [field]: [...state[field], filterToSet]
    };
};

export const filterReducer = (
    state = initialState,
    action: FilterActionTypes
): FilterState => {
    switch (action.type) {
        case SET_CATEGORY_FILTER:
            return setMultipleFilter(
                MultipleFilterField.categories,
                state,
                action.category
            );
        case SET_KIND_FILTER:
            return setMultipleFilter(
                MultipleFilterField.kinds,
                state,
                action.kind
            );
        case SET_FLAVOR_FILTER:
            return setMultipleFilter(
                MultipleFilterField.flavors,
                state,
                action.flavor
            );
        case SET_ORDER_FILTER:
            return {
                ...state,
                order: action.order
            };
        case SET_VIEW_FILTER:
            return {
                ...state,
                view: action.view
            };
        default:
            return state;
    }
};
