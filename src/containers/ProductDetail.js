import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter, Link } from 'react-router-dom'
import gql from 'graphql-tag'

import DetailedProduct from '../components/DetailedProduct'
import DetailedProductLine from '../components/DetailedProductLine'

import classes from '../css/Products.css';


class ProductDetail extends React.Component {
  render() {
    if (this.props.productQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {Product} = this.props.productQuery  
    
    let productTable
    if (Product.productLine.products){
      let firstProduct=Product.productLine.products.slice(0,1)[0]
      productTable=(
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Order Number</th>
            {firstProduct.properties.map(prName => {
              if (prName.productPropertyRelevantField || prName.productPropertyRelevantField===null)  
                return <th key={prName.productPropertyId}>{prName.productPropertyName}</th>
              else
                return true
            })}
            </tr>
          </thead>
          <tbody>
          {Product.productLine.products.map(product => (
            <tr className={product.productId===Product.id?classes.ProductHighlight:""} key={product.productId}>
              <td>
                <Link
                  className='bg-white ma3 box product-line flex flex-column no-underline br2'
                  to={`/product/${product.productId}`}
                >
                  {product.productType}
                </Link>
                </td>
                <td>
                <Link
                  className='bg-white ma3 box product-line flex flex-column no-underline br2'
                  to={`/product/${product.productId}`}
                >
                  {product.productOrderNumber}
                </Link>
                </td>
              {product.properties.map(prVal=>(
                <td key={prVal.productPropertyId}>{prVal.productPropertyValue}</td>
              ))}
            </tr>
          ))}    
          </tbody>
        </table>
     )
    }

    return (
        //<div className='bg-white detail flex flex-column no-underline br2 h-100'>
        //  <div className='flex items-center black-80 fw3 name'>
        <div className='bg-white detail no-underline br2 h-100'>
          <div className=' black-80 fw3 name'>
            <h1>{Product.name} {Product.type} (Order number {Product.orderNumber})</h1>
          </div>
          <h2>Compare with other products in this product line</h2>
          {productTable}
          <DetailedProduct
            product={Product}
            refresh={() => this.props.productQuery.refetch()}
          />                  
          <h2>More info about Product Line {Product.productLine.productLineName}</h2>
          <DetailedProductLine 
            productLine={Product.productLine}
            refresh={() => this.props.productQuery.refetch()}
          />
        </div>
    )
  }

  
}

const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    Product(id: $id) {
      id
      name
      orderNumber
      type
      description
      imageUrl
      displayOrder
      showInTable
  
      productLine{
        id
        productLineName:name
        subtitle
        productLineDescription:description
        productLineImageUrl:imageUrl
        products{
          productId:id
          productName:name
          productOrderNumber: orderNumber
          productType: type
          properties {
            productPropertyId:id
            productPropertyName:name
            productPropertyValue:value
            productPropertyRelevantField: relevantField
          }
          productImageUrl:imageUrl
        }
      }
      productLineAsAccessory{
        id
        productLineAsAccessoryName:name
      }
      properties{
        propertyId:id
        propertyName:name
        propertyValue:value
        propertyUnit:unit
        propertyRelevantField: relevantField
      }
      images{
        alt
        imageDescription:description
        imageImageUrl:imageUrl
      }
    }
  }
`

const ProductDetailWithGraphQL = compose(
  graphql(PRODUCT_QUERY, {
    name: 'productQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  })
)(ProductDetail)

export default withRouter(ProductDetailWithGraphQL)
