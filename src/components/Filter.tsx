import * as React from 'react';
import './Filter.scss';

interface Props {
    categories: { [category: string]: number };
    kinds: string[];
    flavors: string[];
    onCategoryChange: (category: string) => any;
    onKindChange: (kind: string) => any;
    onFlavorChange: (flavor: string) => any;
    visible: boolean;
}

const Filter = ({
    categories,
    kinds,
    flavors,
    onCategoryChange,
    onKindChange,
    onFlavorChange,
    visible
}: Props) => (
    <div
        className={`filter${visible ? ' filter_fixed' : ''}`}
        onClick={event => event.stopPropagation()}
    >
        <h4>Категория</h4>
        <ul className="filter-list">
            {Object.keys(categories).map(category => (
                <li key={category} className="filter-list-item">
                    <input
                        className="filter-checkbox"
                        type="checkbox"
                        onChange={() => onCategoryChange(category)}
                    />
                    <span>{category}</span>{' '}
                    <span className="filter-amount">
                        {categories[category]}
                    </span>
                </li>
            ))}
        </ul>
        <h4>Вид</h4>
        <ul className="filter-list">
            {kinds.map((kind: string) => (
                <li key={kind} className="filter-list-item">
                    <input
                        className="filter-checkbox"
                        type="checkbox"
                        onChange={() => onKindChange(kind)}
                    />
                    <span>{kind}</span>
                </li>
            ))}
        </ul>
        <h4>Вкус</h4>
        <ul className="filter-list">
            {flavors.map((flavor: string) => (
                <li key={flavor} className="filter-list-item">
                    <input
                        className="filter-checkbox"
                        type="checkbox"
                        onChange={() => onFlavorChange(flavor)}
                    />
                    <span>{flavor}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Filter;
