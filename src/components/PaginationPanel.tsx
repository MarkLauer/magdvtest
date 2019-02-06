import * as React from 'react';
import {Order, Sort, View} from './ProductList';
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
    onViewChange: (view: View) => void;
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
    onOrderChange,
    onViewChange
}: Props) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-panel">
            <div className="pagination-panel__select-wrapper">
                <span className="pagination-panel__select-caption">
                    Порядок
                </span>
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
                <span className="pagination-panel__select-caption">Кол-во</span>
                <select
                    value={productsPerPage}
                    name="productsPerPage"
                    onChange={onSelectChange}
                    className="pagination-panel__select"
                >
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
                <i className="fas fa-angle-down pagination-panel__select-arrow" />
            </div>
            <div className="pagination-panel__flex-filler" />
            <div className="pagination-panel__page-list">
                {pages <= 3 ? (
                    pageNumbers.map(page => (
                        <button
                            key={page}
                            className={`pagination-panel__page-list-button${
                                page === currentPage
                                    ? ' pagination-panel__page-list-button_current'
                                    : ''
                            }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    ))
                ) : (
                    <React.Fragment>
                        <button
                            className={`pagination-panel__page-list-button${
                                currentPage === 1
                                    ? ' pagination-panel__page-list-button_current'
                                    : ''
                            }`}
                            onClick={() => {
                                if (currentPage > 1) {
                                    onPageChange(currentPage - 1);
                                }
                            }}
                        >
                            {currentPage > 2 ? (
                                <i className="fas fa-angle-left" />
                            ) : (
                                1
                            )}
                        </button>
                        <button
                            className={`pagination-panel__page-list-button${
                                currentPage > 1 &&
                                currentPage < pageNumbers[pages - 1]
                                    ? ' pagination-panel__page-list-button_current'
                                    : ''
                            }`}
                            onClick={() => {
                                if (currentPage === 1) {
                                    onPageChange(currentPage + 1);
                                } else if (
                                    currentPage === pageNumbers[pages - 1]
                                ) {
                                    onPageChange(currentPage - 1);
                                }
                            }}
                        >
                            {currentPage === 1
                                ? currentPage + 1
                                : currentPage === pageNumbers[pages - 1]
                                ? currentPage - 1
                                : currentPage}
                        </button>
                        <button
                            className={`pagination-panel__page-list-button${
                                currentPage === pageNumbers[pages - 1]
                                    ? ' pagination-panel__page-list-button_current'
                                    : ''
                            }`}
                            onClick={() => {
                                if (currentPage < pageNumbers[pages - 1]) {
                                    onPageChange(currentPage + 1);
                                }
                            }}
                        >
                            {currentPage < pageNumbers[pages - 2] ? (
                                <i className="fas fa-angle-right" />
                            ) : (
                                pageNumbers[pages - 1]
                            )}
                        </button>
                    </React.Fragment>
                )}
            </div>
            <div className="pagination-panel__view-icons-container">
                <i
                    className={`fas fa-th-large pagination-panel__view-icon${
                        view === View.Tile
                            ? ' pagination-panel__view-icon_active'
                            : ''
                    }`}
                    onClick={() => onViewChange(View.Tile)}
                />
                <i
                    className={`fas fa-bars pagination-panel__view-icon${
                        view === View.List
                            ? ' pagination-panel__view-icon_active'
                            : ''
                    }`}
                    onClick={() => onViewChange(View.List)}
                />
            </div>
        </div>
    );
};

export default PaginationPanel;
