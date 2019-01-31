export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    isNew: boolean;
    isHit: boolean;
    category: string;
    kind: string;
    flavor: string;
}

export interface ProductListState {
    products: Product[];
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

interface ReceiveProductsAction {
    type: typeof RECEIVE_PRODUCTS;
    products: Product[];
}

export type ProductListActionTypes = ReceiveProductsAction;
