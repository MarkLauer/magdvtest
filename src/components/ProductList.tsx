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
        productsPerPage: 6,
        sort: Sort.Position,
        order: Order.Ascend,
        view: View.Tile
    };

    handlePageChange = (page: number) => {
        this.setState({ currentPage: page });
    };

    handleSelectChange = ({
        currentTarget: { name, value }
    }: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ [name]: value, currentPage: 1 });
    };

    handleOrderChange = () => {
        const { order } = this.state;
        if (order === Order.Ascend) {
            this.setState({ order: Order.Descend, currentPage: 1 });
        } else {
            this.setState({ order: Order.Ascend, currentPage: 1 });
        }
    };

    handleViewChange = (view: View) => {
        this.setState({ view });
    };

    render(): React.ReactNode {
        const { products } = this.props;
        const { currentPage, productsPerPage, sort, order, view } = this.state;

        const sortedProducts = products.sort((a, b) => {
            if (sort === Sort.Position) {
                if (order === Order.Ascend) {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            } else {
                if (order === Order.Ascend) {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            }
        });

        const lastProduct = currentPage * productsPerPage;
        const firstProduct = lastProduct - productsPerPage;
        const currentProducts = sortedProducts.slice(firstProduct, lastProduct);

        const paginationPanel = (
            <PaginationPanel
                pages={Math.ceil(sortedProducts.length / productsPerPage)}
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                sort={sort}
                order={order}
                view={view}
                onPageChange={this.handlePageChange}
                onSelectChange={this.handleSelectChange}
                onOrderChange={this.handleOrderChange}
                onViewChange={this.handleViewChange}
            />
        );

        return (
            <div className="product-list">
                <div className="product-list__header">Вафли</div>
                {paginationPanel}
                <button
                    className={`product-list__filter-button${
                        view === View.Tile
                            ? ' product-list__filter-button_tile'
                            : ''
                    }`}
                >
                    Фильтр
                </button>
                <div
                    className={`product-list__products-container${
                        view === View.Tile
                            ? ' product-list__products-container_tile'
                            : ''
                    }`}
                >
                    {currentProducts.map(product => (
                        <ProductCardContainer
                            key={product.id}
                            product={product}
                            view={view}
                        />
                    ))}
                </div>
                {paginationPanel}
            </div>
        );
    }
}

export default ProductList;
