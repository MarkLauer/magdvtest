import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Filter from '../components/Filter';
import {
    setCategoryFilter,
    setKindFilter,
    setFlavorFilter
} from '../store/filter/actions';
import { AppState } from '../store';
import { Product } from '../store/productList/types';

enum ProductFilterableFields {
    category = 'category',
    kind = 'kind',
    flavor = 'flavor'
}

const getProductsProps = (
    products: Product[],
    field: ProductFilterableFields
) =>
    products.reduce(
        (props: string[], product) => [...props, product[field]],
        []
    );

const mapState = (state: AppState) => ({
    categories: getProductsProps(
        state.productList.products,
        ProductFilterableFields.category
    ).reduce((categories: { [index: string]: number }, category) => {
        if (category in categories) {
            categories[category]++;
        } else {
            categories[category] = 1;
        }
        return categories;
    }, {}),
    kinds: [
        ...new Set(
            getProductsProps(
                state.productList.products,
                ProductFilterableFields.kind
            )
        )
    ],
    flavors: [
        ...new Set(
            getProductsProps(
                state.productList.products,
                ProductFilterableFields.flavor
            )
        )
    ]
});

const mapDispatch = (dispatch: Dispatch) => ({
    onCategoryChange: (category: string) =>
        dispatch(setCategoryFilter(category)),
    onKindChange: (kind: string) => dispatch(setKindFilter(kind)),
    onFlavorChange: (flavor: string) => dispatch(setFlavorFilter(flavor))
});

export default connect(
    mapState,
    mapDispatch
)(Filter);
