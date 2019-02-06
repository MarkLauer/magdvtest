import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import ProductCard from '../components/ProductCard';
import { addToCart, removeFromCart } from '../store/shoppingCart/actions';
import { Product } from '../store/productList/types';

interface OwnProps {
    product: Product;
}

const mapState = ({ shoppingCart }: AppState, { product }: OwnProps) => ({
    inCart: shoppingCart[product.id]
});

const mapDispatch = (dispatch: Dispatch) => ({
    onAddToCart: (productId: number) => dispatch(addToCart(productId)),
    onRemoveFromCart: (productId: number) => dispatch(removeFromCart(productId))
});

export default connect(
    mapState,
    mapDispatch
)(ProductCard);
