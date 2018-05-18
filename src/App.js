import React, { Component } from 'react';
//import Layout from './components/Layout/Layout';
import Layout from './hoc/Layout/Layout';

import PurchaseCartBuilder from './containers/PurchaseCartBuilder/PurchaseCartBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <PurchaseCartBuilder /> 
        </Layout>
      </div>
    );
  }
}

export default App;
