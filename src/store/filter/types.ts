export interface FilterState {
    category: string;
    kind: string;
    flavor: string;
    order: Order;
}

export enum Order {
    Position = 'POSITION',
    Price = 'PRICE'
}

export const SET_FILTER = 'SET_FILTER';

interface SetFilterAction {
    type: typeof SET_FILTER;
    payload: FilterState;
}

export type FilterActionTypes = SetFilterAction;
