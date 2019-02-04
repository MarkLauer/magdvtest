import {
    SET_CATEGORY_FILTER,
    SET_KIND_FILTER,
    SET_FLAVOR_FILTER
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
