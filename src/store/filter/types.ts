export interface FilterState {
    category: string[];
    kind: string[];
    flavor: string[];
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

export const SET_FILTER = 'SET_FILTER';

interface SetFilterAction {
    type: typeof SET_FILTER;
    payload: FilterState;
}

export type FilterActionTypes = SetFilterAction;
