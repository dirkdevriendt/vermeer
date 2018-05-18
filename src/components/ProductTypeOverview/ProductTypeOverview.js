import React from 'react';
import Aux from '../../hoc/Auxiliar/Auxiliar';
import classes from './ProductTypeOverview.css';

const productTypes=[
    {name:'Haspelwagens'},
    {name:'Kabelrollen'},
    {name:'Compressoren'},
    {name:'Vuilwaterpompen'},
    {name:'Portofoons'},
    {name:'Vlieters'},
]

const productTypeOverview=(props)=>(
    <div className={classes.ProductTypeOverview}>
        <h1>Our Products</h1>
        <ul>
            {productTypes.map(productType=>(
                <li key={productType.name}>
                    <a key={productType.name} href="">
                        {productType.name}
                    </a>
                </li>))}
        </ul>        
    </div>    
);

export default productTypeOverview;