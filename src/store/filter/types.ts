export interface FilterState {
    categories: string[];
    kinds: string[];
    flavors: string[];
    order: Order;
    view: View;
}

export enum Order {
    Position = 'POSITION',
    Price = 'PRICE'
}

export enum View {
    List = 'LIST',
    Tile = 'TILE'
}

export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_KIND_FILTER = 'SET_KIND_FILTER';
export const SET_FLAVOR_FILTER = 'SET_FLAVOR_FILTER';
export const SET_ORDER_FILTER = 'SET_ORDER_FILTER';
export const SET_VIEW_FILTER = 'SET_VIEW_FILTER';

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

interface SetOrderFilterAction {
    type: typeof SET_ORDER_FILTER;
    order: Order;
}

interface SetViewFilterAction {
    type: typeof SET_VIEW_FILTER;
    view: View;
}

export type FilterActionTypes =
    | SetCategoryFilterAction
    | SetKindFilterAction
    | SetFlavorFilterAction
    | SetOrderFilterAction
    | SetViewFilterAction;
