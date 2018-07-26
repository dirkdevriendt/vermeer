import React, { Component } from 'react';
//import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

import ProductCategoryListPage from './containers/ProductCategoryListPage'
import ProductCategoryDetailPage from './containers/ProductCategoryDetailPage'
import ProductLineList from './containers/ProductLineList'
import ProductLineDetailPage from './components/ProductLineDetailPage'
//import ProductListPage from './components/ProductListPage'
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
          <Route path='/productCategory/:id' component={ProductCategoryDetailPage} />
          <Route path='/productLines' component={ProductLineList} />
          <Route path='/productLine/:id' component={ProductLineDetailPage} />  
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