import * as React from 'react';
import './PaginationPanel.scss';

interface Props {
    pages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const PaginationPanel = ({ pages, currentPage, onPageChange }: Props) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-panel">
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
                {currentPage === pageNumbers[pages - 1] &&
                    pages > 2 && (
                        <button
                            className="pagination-panel__page-list-button"
                            onClick={() =>
                                onPageChange(
                                    pageNumbers[pages - 2]
                                )
                            }
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
                {((currentPage === pageNumbers[pages - 2] &&
                    pages > 2) ||
                    (pages === 3 &&
                        currentPage !==
                            pageNumbers[pages - 1])) && (
                    <button
                        className="pagination-panel__page-list-button"
                        onClick={() =>
                            onPageChange(pageNumbers[pages - 1])
                        }
                    >
                        {pageNumbers[pages - 1]}
                    </button>
                )}
                {currentPage < pageNumbers[pages - 2] &&
                    pages > 3 && (
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
