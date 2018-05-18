import React from 'react';

import product1Image from '../../assets/images/products/product_1.jpg';
import classes from './ProductType.css'

const productType=(props)=>(
    <div className={classes.ProductType}> 
        <img src={product1Image} alt={props.name}/>
    </div>
);

export default productType;