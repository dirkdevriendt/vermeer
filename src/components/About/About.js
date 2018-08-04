import React from 'react';

import classes from './PurchaseCart.css';
import Product from './Product/Product';

const purchaseCartResult = ( props ) => {
    let transformedProducts = Object.keys( props.products )
        .map( igKey => {
            return [...Array( props.products[igKey] )].map( ( _, i ) => {
                return <Product key={igKey + i} name={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedProducts.length === 0) {
        transformedProducts = <p>Please start adding products!</p>;
    }
    return (
        <div className={classes.PurchaseCartResult}>            
            {transformedProducts}
        </div>
    );
};

export default purchaseCartResult;