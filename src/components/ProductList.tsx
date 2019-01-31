import * as React from 'react';

interface Props {
    children: JSX.Element[];
}

const ProductList = ({ children }: Props) => <div>{children}</div>;

export default ProductList;
