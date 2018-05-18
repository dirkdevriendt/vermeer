import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Product.css';

class Product extends Component {
    render () {
        let product = null;
        /*    
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                product = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                product = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                product = <div className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                product = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                product = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                product = <div className={classes.Salad}></div>;
                break;
            default:
                product = null;
        }
        */
       product=<p>{this.props.name}</p>
        return product;
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired
};

export default Product;