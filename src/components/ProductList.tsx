import * as React from 'react';
import { Product } from '../store/productList/types';
import PaginationPanel from './PaginationPanel';
import ProductCardContainer from '../containers/ProductCardContainer';
import './ProductList.scss';

export enum Sort {
    Position = 'POSITION',
    Price = 'PRICE'
}

export enum Order {
    Ascend = 'ASCEND',
    Descend = 'DESCEND'
}

export enum View {
    List = 'LIST',
    Tile = 'TILE'
}

interface Props {
    products: Product[];
}

class ProductList extends React.Component<Props> {
    state = {
        currentPage: 1,
        productsPerPage: 3,
        sort: Sort.Position,
        order: Order.Ascend,
        view: View.List
    };

    handlePageChange = (page: number) => {
        this.setState({ currentPage: page });
    };

    render(): React.ReactNode {
        const { products } = this.props;
        const { currentPage, productsPerPage } = this.state;

        const lastProduct = currentPage * productsPerPage;
        const firstProduct = lastProduct - productsPerPage;
        const currentProducts = products.slice(firstProduct, lastProduct);

        return (
            <div className="product-list">
                <div className="product-list__header">Вафли</div>
                <PaginationPanel
                    pages={Math.ceil(products.length / productsPerPage)}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
                {currentProducts.map(product => (
                    <ProductCardContainer key={product.id} product={product} />
                ))}
                <PaginationPanel
                    pages={Math.ceil(products.length / productsPerPage)}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default ProductList;
