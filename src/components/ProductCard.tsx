import * as React from 'react';
import { FormEvent } from 'react';
import { Product } from '../store/productList/types';
import { formatPrice } from '../utils';
import './ProductCard.scss';
import './utils.scss';

interface Props {
    product: Product;
    inCart: number;
    onAddToCart: (productId: number) => any;
    onRemoveFromCart: (productId: number) => any;
    onSetProductAmount: (productId: number, amount: number) => any;
}

class ProductCard extends React.Component<Props> {
    state = {
        inCart: 0
    };

    handleChange = ({
        currentTarget: { value }
    }: FormEvent<HTMLInputElement>) => {
        if (value) {
            this.setState({ inCart: parseInt(value) });
        } else {
            this.setState({ inCart: 0 });
        }
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const {
            product: { id },
            onSetProductAmount
        } = this.props;
        const { inCart } = this.state;
        onSetProductAmount(id, inCart);
        event.preventDefault();
    };

    render(): React.ReactNode {
        const { product, inCart, onAddToCart, onRemoveFromCart } = this.props;

        return (
            <div className="product-card">
                <div className="product-card__tags-container">
                    {product.isNew && (
                        <span className="product-card__tag product-card__tag_new">
                            Новинка
                        </span>
                    )}
                    {product.isHit && (
                        <span className="product-card__tag product-card__tag_hit">
                            Хит
                        </span>
                    )}
                    {product.isWeight && (
                        <span className="product-card__tag product-card__tag_weight">
                            <i className="fas fa-weight-hanging" />
                        </span>
                    )}
                </div>
                <img
                    className="product-card__image"
                    src={product.image}
                    alt={product.name}
                />
                <div className="product-card__content">
                    <span className="product-card__content-name">
                        {product.name}
                    </span>
                    <div className="product-card__content-bottom">
                        {product.isWeight ? (
                            <div className="product-card__content-weight-price">
                                <span className="product-card__content-price">
                                    {formatPrice(product.price * 5)}
                                </span>
                                <span className="product-card__content-weight-price-per-package">
                                    {' '}
                                    /упак. 5 кг
                                </span>
                                <span className="product-card__content-weight-price-per-kg">
                                    {formatPrice(product.price)} / кг
                                </span>
                            </div>
                        ) : (
                            <span className="product-card__content-price">
                                {formatPrice(product.price)}
                            </span>
                        )}
                        {product.oldPrice && !product.isWeight && (
                            <span className="product-card__content-old-price">
                                {formatPrice(product.oldPrice)}
                            </span>
                        )}
                        <div className="flex-filler" />
                        <div className="product-card__content-bottom-cart">
                            {!inCart ? (
                                <button
                                    className="product-card__content-bottom-cart-button"
                                    onClick={() => {
                                        const { inCart } = this.state;
                                        onAddToCart(product.id);
                                        this.setState({ inCart: inCart + 1 });
                                    }}
                                >
                                    <i className="fas fa-plus product-card__content-bottom-cart-button-icon" />
                                    <i className="fas fa-shopping-basket product-card__content-bottom-cart-button-icon" />
                                </button>
                            ) : (
                                <React.Fragment>
                                    <button
                                        className="product-card__content-bottom-cart-button"
                                        onClick={() => {
                                            const { inCart } = this.state;
                                            onRemoveFromCart(product.id);
                                            this.setState({
                                                inCart: inCart - 1
                                            });
                                        }}
                                    >
                                        <i className="fas fa-minus product-card__content-bottom-cart-button-icon" />
                                    </button>
                                    <form
                                        className="product-card__content-bottom-cart-form"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <input
                                            className="product-card__content-bottom-cart-amount"
                                            value={this.state.inCart}
                                            onChange={this.handleChange}
                                        />
                                    </form>
                                    <button
                                        className="product-card__content-bottom-cart-button"
                                        onClick={() => {
                                            const { inCart } = this.state;
                                            onAddToCart(product.id);
                                            this.setState({
                                                inCart: inCart + 1
                                            });
                                        }}
                                    >
                                        <i className="fas fa-plus product-card__content-bottom-cart-button-icon" />
                                    </button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
