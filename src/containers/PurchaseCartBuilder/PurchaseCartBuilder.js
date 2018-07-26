import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliar/Auxiliar';
import PurchaseCart from '../../components/PurchaseCart/PurchaseCart';
import BuildControls from '../../components/PurchaseCart/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/PurchaseCart/OrderSummary/OrderSummary';

const PRODUCT_PRICES = {
    'BTT.08.10 Haspelaandrijving': 0.5,
    'ZW1100': 0.3,
    'Variant 100': 1,
    'Variant 130': 2
};

class PurchaseCartBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        products: {
            'BTT.08.10 Haspelaandrijving': 0,
            'ZW1100': 0,
            'Variant 100': 0,
            'Variant 130': 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (products) {
        const sum = Object.keys( products )
            .map( igKey => {
                return products[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addProductHandler = ( name ) => {
        const oldCount = this.state.products[name];
        const updatedCount = oldCount + 1;
        const updatedproducts = {
            ...this.state.products
        };
        updatedproducts[name] = updatedCount;
        
        const priceAddition = PRODUCT_PRICES[name];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, products: updatedproducts } );
        
        this.updatePurchaseState(updatedproducts);
    }

    removeProductHandler = ( name ) => {
        const oldCount = this.state.products[name];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedproducts = {
            ...this.state.products
        };
        updatedproducts[name] = updatedCount;
        const priceDeduction = PRODUCT_PRICES[name];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, products: updatedproducts } );
        this.updatePurchaseState(updatedproducts);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render () {
        const disabledInfo = {
            ...this.state.products
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <h1>Welcome</h1>
        //  <Aux>
                
        //        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        //            <OrderSummary 
        //                products={this.state.products}
        //                price={this.state.totalPrice}
        //                purchaseCancelled={this.purchaseCancelHandler}
        //                purchaseContinued={this.purchaseContinueHandler} />
        //        </Modal>
        //        <PurchaseCart products={this.state.products} />
        //        <BuildControls
        //           productAdded={this.addProductHandler}
        //            productRemoved={this.removeProductHandler}
        //            disabled={disabledInfo}
        //            purchasable={this.state.purchasable}
        //            ordered={this.purchaseHandler}
        //            price={this.state.totalPrice} />
        //            */
        //    </Aux>
        );
    }
}

export default PurchaseCartBuilder;