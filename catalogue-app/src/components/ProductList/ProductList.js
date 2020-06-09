import React from 'react';
import Product from '../Product/Product';


const ProductList = ({phones}) => {

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center w-100 mx-auto">
            {phones.map((phone,index) => (<Product phone={phone} key={index} />))}
        </div>
    );
}

export default ProductList;
