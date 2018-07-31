import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/SummaryProduct'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductList extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allProductsQuery.refetch()
    }
  }

  render() {
    if (this.props.allProductsQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    let blurClass = ''
    if (this.props.location.pathname !== '/') {
      blurClass = ' blur'
    }

    return (
      <div className={'w-100 flex justify-center pa6' + blurClass}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
          <Link
            to='/create'
            className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
          >
            <img
              src={require('../assets/plus.svg')}
              alt=''
              className='plus mb3'
            />
            <div>New Product</div>
          </Link>
          {this.props.allProductsQuery.allProducts && this.props.allProductsQuery.allProducts.map(product => (
            <Product
              key={product.id}
              product={product}
              refresh={() => this.props.allProductsQuery.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}

const ALL_PRODUCTS_QUERY = gql`
  query allProductsQuery {
    allProducts(orderBy: displayOrder_DESC) {
      id
      imageUrl
      name
    }
  }
`

const ProductListPageWithQuery = graphql(ALL_PRODUCTS_QUERY, {
  name: 'allProductsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(ProductList)

export default ProductListPageWithQuery
