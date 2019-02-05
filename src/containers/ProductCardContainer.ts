import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ProductCard from '../components/ProductCard';
import { addToCart, removeFromCart } from '../store/shoppingCart/actions';

const mapDispatch = (dispatch: Dispatch) => ({
    onAddToCart: (productId: number) => dispatch(addToCart(productId)),
    onRemoveFromCart: (productId: number) => dispatch(removeFromCart(productId))
});

export default connect(
    null,
    mapDispatch
)(ProductCard);
