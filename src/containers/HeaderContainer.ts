import { connect } from 'react-redux';

import Header from '../components/Header';
import { AppState } from '../store';

const mapState = (state: AppState) => ({
    cartAmount: Object.keys(state.shoppingCart).reduce(
        (amount, productId) =>
            amount + state.shoppingCart[parseInt(productId, 10)],
        0
    ),
    cartTotal: Object.keys(state.shoppingCart).reduce((total, productId) => {
        const product = state.productList.products.find(
            product => product.id === parseInt(productId, 10)
        );

        if (product) {
            return (
                total +
                product.price * state.shoppingCart[parseInt(productId, 10)]
            );
        }
        return 0;
    }, 0)
});

export default connect(mapState)(Header);
