import * as React from 'react';
import { Product as ProductType } from '../store/productList/types';

interface Props {
    product: ProductType;
    onAddToCartClick: () => void;
}

const ProductCard = ({ product, onAddToCartClick }: Props) => (
    <div>
        <div>
            {product.isNew && <span>Новинка</span>}
            {product.isHit && <span>Хит</span>}
            {product.category === 'Вафли весовые' && <span>Гиря</span>}
        </div>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <span>{product.price}</span>
            {product.oldPrice && <span>{product.oldPrice}</span>}
            <button onClick={onAddToCartClick}>
                Добавить в корзину
            </button>
        </div>
    </div>
);

export default ProductCard;
