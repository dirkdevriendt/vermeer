import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter, Link } from 'react-router-dom'
//import Product from '../components/Product'
import gql from 'graphql-tag'

import DetailedProductLine from '../components/DetailedProductLine'

class ProductLineDetailPage extends React.Component {
  render() {
    if (this.props.productLineQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {ProductLine} = this.props.productLineQuery

    let productTable
    if (ProductLine.products){
      let firstProduct=ProductLine.products.slice(0,1)[0]
      productTable=(
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Order Number</th>
            {firstProduct.properties.map(prName => (
              <th key={prName.name}>{prName.name}</th>
            ))}
            </tr>
          </thead>
          <tbody>
          {ProductLine.products.map(product => (
            <tr key={product.productId}>
              <td>
                <Link
                  className='bg-white ma3 box product-line flex flex-column no-underline br2'
                  to={`/product/${product.productId}`}
                >
                  {product.type}
                </Link>
                </td>
                <td>
                <Link
                  className='bg-white ma3 box product-line flex flex-column no-underline br2'
                  to={`/product/${product.productId}`}
                >
                  {product.orderNumber}
                </Link>
                </td>
              {product.properties.map(prVal=>(
                <td key={prVal.id}>{prVal.value}</td>
              ))}
            </tr>
          ))}    
          </tbody>
        </table>
     )
    }
    

    return (
      <div>
        <DetailedProductLine 
          productLine={ProductLine}
          refresh={() => this.props.productLineQuery.refetch()}
        />       
        {productTable}
      </div>
    )
  }
    handleDelete = async () => {
    await this.props.deleteProductLineMutation({variables: {id: this.props.productLineQuery.ProductLine.id}})
    this.props.history.replace('/')
  }
}

const DELETE_PRODUCT_LINE_MUTATION = gql`
  mutation DeleteProductLineMutation($id: ID!) {
    deleteProductLine(id: $id) {
      id
    }
  }
`

const PRODUCT_LINE_QUERY = gql`
  query productLineQuery($id: ID!) {
    ProductLine(id: $id) {
      id
      name
      subtitle
      description
      imageUrl
      products{
        productId:id
        productName:name
        orderNumber
        type
        properties {
          id
          name
          value
        }
        productImageUrl:imageUrl
      }
    }
  }
`

const ProductLineDetailPageWithGraphQL = compose(
  graphql(PRODUCT_LINE_QUERY, {
    name: 'productLineQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(DELETE_PRODUCT_LINE_MUTATION, {
    name: 'deleteProductLineMutation'
  })
 )(ProductLineDetailPage)

const ProductLineDetailPageWithDelete = graphql(DELETE_PRODUCT_LINE_MUTATION)(ProductLineDetailPageWithGraphQL)

export default withRouter(ProductLineDetailPageWithDelete)
