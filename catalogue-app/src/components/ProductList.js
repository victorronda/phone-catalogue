import React from 'react';
import Product from './Product';

const ProductList = ({phones}) => {

    return (
        <div>
            {phones.map((phone,index) => (<Product phone={phone} key={index} />))}
        </div>
    );
}

export default ProductList;
