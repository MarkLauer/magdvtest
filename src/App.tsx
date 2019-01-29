import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from './store';

import { ProductListState } from './store/productList/types';
import { fetchProducts } from './store/productList/actions';

import { ShoppingCartState } from './store/shoppingCart/types';
import { addToCart, removeFromCart } from './store/shoppingCart/actions';

import { FilterState } from './store/filter/types';
import { setFilter } from './store/filter/actions';

import { SystemState } from './store/system/types';
import { updateSession } from './store/system/actions';


interface AppProps {
    productList: ProductListState;
    fetchProducts: typeof fetchProducts;
    shoppingCart: ShoppingCartState;
    addToCart: typeof addToCart;
    removeFromCart: typeof removeFromCart;
    filter: FilterState;
    setFilter: typeof setFilter;
    system: SystemState;
    updateSession: typeof updateSession;
}

class App extends React.Component<AppProps> {
    render(): React.ReactNode {
        return <div>Hello, World!</div>;
    }
}

const mapStateToProps = ({
    productList,
    shoppingCart,
    filter,
    system
}: AppState) => ({
    productList,
    shoppingCart,
    filter,
    system
});

const mapDispatchToProps = () => ({
    fetchProducts,
    addToCart,
    removeFromCart,
    setFilter,
    updateSession
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
