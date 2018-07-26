import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './index.css'
import 'tachyons'

import App from './App';
//import registerServiceWorker from './registerServiceWorker';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjk1eqdcv4itt0118p0bidrzu' })


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
