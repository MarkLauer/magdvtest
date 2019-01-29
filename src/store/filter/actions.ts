import { FilterState, SET_FILTER } from './types';

export const setFilter = (payload: FilterState) => ({
    type: SET_FILTER,
    payload
});
