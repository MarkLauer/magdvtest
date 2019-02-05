import * as React from 'react';
import { Product } from '../store/productList/types';

interface Props {
    product: Product;
    onAddToCart: (productId: number) => any;
    onRemoveFromCart: (productId: number) => any;
}

const ProductCard = ({ product, onAddToCart, onRemoveFromCart }: Props) => (
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
        </div>
    </div>
);

export default ProductCard;
