import {
    SET_CATEGORY_FILTER,
    SET_KIND_FILTER,
    SET_FLAVOR_FILTER,
    SET_ORDER_FILTER,
    SET_VIEW_FILTER,
    Order,
    View
} from './types';

export const setCategoryFilter = (category: string) => ({
    type: SET_CATEGORY_FILTER,
    category
});

export const setKindFilter = (kind: string) => ({
    type: SET_KIND_FILTER,
    kind
});

export const setFlavorFilter = (flavor: string) => ({
    type: SET_FLAVOR_FILTER,
    flavor
});

export const setOrderFilter = (order: Order) => ({
    type: SET_ORDER_FILTER,
    order
});

export const setViewFilter = (view: View) => ({
    type: SET_VIEW_FILTER,
    view
});
