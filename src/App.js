import React, { Component } from 'react';
//import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

import ProductCategoryListPage from './containers/ProductCategoryListPage'
import ProductCategoryProductList from './containers/ProductCategoryProductList'
import ProductLineList from './containers/ProductLineList'
import ProductLineDetailPage from './components/ProductLineDetailPage'
import ProductList from './containers/ProductList'
import ProductDetail from './containers/ProductDetail'
import Home from './containers/Home/Home';

//import Auth from './containers/Auth/Auth';
//import Logout from './containers/Auth/Logout/Logout';


class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    //if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productCategories' component={ProductCategoryListPage} />
          <Route path='/productCategory/:id' component={ProductCategoryProductList} />
          <Route path='/productLines' component={ProductLineList} />
          <Route path='/productLine/:id' component={ProductLineDetailPage} />  
          <Route path='/products' component={ProductList} />
          <Route path='/product/:id' component={ProductDetail} />  
        </Switch>
      );
    //}

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;