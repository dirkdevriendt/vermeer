import React, { Component } from 'react';

import Aux from '../Auxiliar/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import QuestionSearchBar  from '../../components/QuestionSearchBar/QuestionSearchBar';
//import ProductTypeSlider from '../../components/ProductTypeSlider/ProductTypeSlider';
import ProductCategoryOverview from '../../containers/ProductCategoryOverview/ProductCategoryOverview';

import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                    <QuestionSearchBar />
                    
                <main className={classes.Content}>
                    
                    {this.props.children}
                    <ProductCategoryOverview />
                    
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;