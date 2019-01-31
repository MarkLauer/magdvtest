import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../store';
import { Product } from '../store/productList/types';
import { FilterState } from '../store/filter/types';

import { receiveProducts } from '../store/productList/actions';
import { addToCart } from '../store/shoppingCart/actions';

import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';

interface Props {
    products: Product[];
    dispatch: ThunkDispatch<{}, {}, any>;
}

class ProductListContainer extends React.Component<Props> {
    componentDidMount(): void {
        const { dispatch } = this.props;
        dispatch(receiveProducts());
    }

    render(): React.ReactNode {
        const { products, dispatch } = this.props;

        return (
            <ProductList>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCartClick={() => dispatch(addToCart(product.id))}
                    />
                ))}
            </ProductList>
        );
    }
}

const getVisibleProducts = (products: Product[], filter: FilterState) => {
    let visibleProducts = [...products];

    if (filter.category) {
        visibleProducts = visibleProducts.filter(
            product => product.category === filter.category
        );
    }

    if (filter.kind) {
        visibleProducts = visibleProducts.filter(
            product => product.kind === filter.kind
        );
    }

    if (filter.flavor) {
        visibleProducts = visibleProducts.filter(
            product => product.flavor === filter.flavor
        );
    }

    return visibleProducts;
};

const mapState = (state: AppState) => ({
    products: getVisibleProducts(state.productList.products, state.filter)
});

export default connect(mapState)(ProductListContainer);
