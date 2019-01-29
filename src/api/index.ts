import products from './products.json';

export const getProducts = (cb: any) => setTimeout(() => cb(products), 100);
