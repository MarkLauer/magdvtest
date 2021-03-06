import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../store';
import { Product } from '../store/productList/types';
import { FilterState } from '../store/filter/types';

import { receiveProducts } from '../store/productList/actions';

import ProductList from '../components/ProductList';

interface Props {
    products: Product[];
    dispatch: ThunkDispatch<{}, {}, any>;
    onFilterVisibleChange: () => void;
}

class ProductListContainer extends React.Component<Props> {
    componentDidMount(): void {
        const { dispatch } = this.props;
        dispatch(receiveProducts());
    }

    render(): React.ReactNode {
        const { dispatch, ...rest } = this.props;
        return <ProductList {...rest} />;
    }
}

const getVisibleProducts = (products: Product[], filter: FilterState) => {
    let visibleProducts = [...products];

    if (filter.categories.length > 0) {
        visibleProducts = visibleProducts.filter(product =>
            filter.categories.includes(product.category)
        );
    }

    if (filter.kinds.length > 0) {
        visibleProducts = visibleProducts.filter(product =>
            filter.kinds.includes(product.kind)
        );
    }

    if (filter.flavors.length > 0) {
        visibleProducts = visibleProducts.filter(product =>
            filter.flavors.includes(product.flavor)
        );
    }

    return visibleProducts;
};

const mapState = (state: AppState) => ({
    products: getVisibleProducts(state.productList.products, state.filter)
});

export default connect(mapState)(ProductListContainer);
