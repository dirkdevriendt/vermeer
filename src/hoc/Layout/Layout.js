import React, { Component } from 'react';

import Aux from '../Auxiliar/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import QuestionSearchBar  from '../../components/QuestionSearchBar/QuestionSearchBar';
import ProductTypeSlider from '../../components/ProductTypeSlider/ProductTypeSlider';
import ProductTypeOverview from '../../components/ProductTypeOverview/ProductTypeOverview';

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
                <main className={classes.Content}>
                    <QuestionSearchBar />
                    {this.props.children}
                    <ProductTypeSlider />
                    <ProductTypeOverview />
                    <Footer/>
                </main>
            </Aux>
        )
    }
}

export default Layout;