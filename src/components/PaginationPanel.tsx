import * as React from 'react';
import { Order, Sort, View } from './ProductList';
import './PaginationPanel.scss';

interface Props {
    pages: number;
    currentPage: number;
    productsPerPage: number;
    sort: Sort;
    order: Order;
    view: View;
    onPageChange: (page: number) => void;
    onSelectChange: (event: React.FormEvent<HTMLSelectElement>) => void;
    onOrderChange: () => void;
}

const PaginationPanel = ({
    pages,
    currentPage,
    productsPerPage,
    sort,
    order,
    view,
    onPageChange,
    onSelectChange,
    onOrderChange
}: Props) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-panel">
            <div className="pagination-panel__select-wrapper">
                <select
                    value={sort}
                    name="sort"
                    onChange={onSelectChange}
                    className="pagination-panel__select"
                >
                    <option value={Sort.Position}>Позиция</option>
                    <option value={Sort.Price}>Цена</option>
                </select>
                <i className="fas fa-angle-down pagination-panel__select-arrow" />
            </div>
            <button
                className="pagination-panel__order-button"
                onClick={() => onOrderChange()}
            >
                {order === Order.Ascend ? (
                    <i className="fas fa-arrow-up" />
                ) : (
                    <i className="fas fa-arrow-down" />
                )}
            </button>
            <div className="pagination-panel__select-wrapper">
                <select
                    value={productsPerPage}
                    name="productsPerPage"
                    onChange={onSelectChange}
                    className="pagination-panel__select"
                >
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                </select>
                <i className="fas fa-angle-down pagination-panel__select-arrow" />
            </div>
            <div className="pagination-panel__flex-filler" />
            <div className="pagination-panel__page-list">
                {currentPage > 2 && pages > 3 && (
                    <button
                        className="pagination-panel__page-list-button pagination-panel__page-list-button-arrow"
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <i className="fas fa-angle-left" />
                    </button>
                )}
                {(currentPage === 2 || (pages === 3 && currentPage !== 1)) && (
                    <button
                        className="pagination-panel__page-list-button"
                        onClick={() => onPageChange(1)}
                    >
                        1
                    </button>
                )}
                {currentPage === pageNumbers[pages - 1] && pages > 2 && (
                    <button
                        className="pagination-panel__page-list-button"
                        onClick={() => onPageChange(pageNumbers[pages - 2])}
                    >
                        {pageNumbers[pages - 2]}
                    </button>
                )}
                <button className="pagination-panel__page-list-button pagination-panel__page-list-button_current">
                    {currentPage}
                </button>
                {currentPage === 1 && pages >= 2 && (
                    <button
                        className="pagination-panel__page-list-button"
                        onClick={() => onPageChange(2)}
                    >
                        2
                    </button>
                )}
                {((currentPage === pageNumbers[pages - 2] && pages > 2) ||
                    (pages === 3 &&
                        currentPage !== pageNumbers[pages - 1])) && (
                    <button
                        className="pagination-panel__page-list-button"
                        onClick={() => onPageChange(pageNumbers[pages - 1])}
                    >
                        {pageNumbers[pages - 1]}
                    </button>
                )}
                {currentPage < pageNumbers[pages - 2] && pages > 3 && (
                    <button
                        className="pagination-panel__page-list-button pagination-panel__page-list-button-arrow"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <i className="fas fa-angle-right" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PaginationPanel;
