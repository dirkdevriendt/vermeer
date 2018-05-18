import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliar/Auxiliar';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const productSummary = Object.keys( this.props.products )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.products[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>The products you selected:</p>
                <ul>
                    {productSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;