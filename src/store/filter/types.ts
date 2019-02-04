export interface FilterState {
    categories: string[];
    kinds: string[];
    flavors: string[];
}

export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_KIND_FILTER = 'SET_KIND_FILTER';
export const SET_FLAVOR_FILTER = 'SET_FLAVOR_FILTER';

interface SetCategoryFilterAction {
    type: typeof SET_CATEGORY_FILTER;
    category: string;
}

interface SetKindFilterAction {
    type: typeof SET_KIND_FILTER;
    kind: string;
}

interface SetFlavorFilterAction {
    type: typeof SET_FLAVOR_FILTER;
    flavor: string;
}

export type FilterActionTypes =
    | SetCategoryFilterAction
    | SetKindFilterAction
    | SetFlavorFilterAction;
