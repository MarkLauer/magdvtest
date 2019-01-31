import * as React from 'react';

interface Props {
    categories: { [category: string]: number };
    kinds: string[];
    flavors: string[];
    onCategoryChange: (category: string) => any;
    onKindChange: (kind: string) => any;
    onFlavorChange: (flavor: string) => any;
}

const Filter = ({
    categories,
    kinds,
    flavors,
    onCategoryChange,
    onKindChange,
    onFlavorChange
}: Props) => (
    <div>
        <p>Категория</p>
        {Object.keys(categories).map(category => (
            <p key={category}>
                <input
                    type="checkbox"
                    onChange={() => onCategoryChange(category)}
                />
                <span>{category}</span>{' '}
                <span>{categories[category]}</span>
            </p>
        ))}
        <p>Вид</p>
        {kinds.map((kind: string) => (
            <p key={kind}>
                <input type="checkbox" onChange={() => onKindChange(kind)} />
                <span>{kind}</span>
            </p>
        ))}
        <p>Вкус</p>
        {flavors.map((flavor: string) => (
            <p key={flavor}>
                <input
                    type="checkbox"
                    onChange={() => onFlavorChange(flavor)}
                />
                <span>{flavor}</span>
            </p>
        ))}
    </div>
);

export default Filter;
