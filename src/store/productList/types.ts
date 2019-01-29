export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    tags: Tag[];
    category: string;
    kind: string;
    flavor: string;
}

export interface ProductListState {
    products: Product[];
}

export enum Tag {
    New = 'NEW',
    Hit = 'HIT',
    Weight = 'WEIGHT'
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

interface ReceiveProductsAction {
    type: typeof RECEIVE_PRODUCTS;
    products: Product[];
}

export type ProductListActionTypes = ReceiveProductsAction;
