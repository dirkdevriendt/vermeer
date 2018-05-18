import React from 'react';
import ProductType from '../ProductType/ProductType';
import classes from './ProductTypeSlider.css'
const productTypeSlider=(props)=>(
    <div className={classes.ProductTypeSlider}>
        <div className={classes.ProductTypeSliderImageBox}>
            <button>left</button>
            <ProductType name="First Product Type" />
            <button>right</button>
        </div>
    </div>
);

export default productTypeSlider;