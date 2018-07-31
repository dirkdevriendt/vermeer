import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ProductLineProductLinkList from '../components/ProductLineProductLinkList'
import gql from 'graphql-tag'

import classes from './Products.css';

class ProductCategoryProductList extends React.Component {

  render() {
    if (this.props.productCategoryQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {ProductCategory} = this.props.productCategoryQuery

    return (
      <div>
        <div className={classes.MainText}>
          <h1>{ProductCategory.productCategoryName}</h1>  
        </div>
        <div className={'w-100 justify-center pa6'}>
          <div className='w-100' style={{maxWidth: 1150}}>
            {ProductCategory.productLines && ProductCategory.productLines.map(productLine => (
              <ProductLineProductLinkList 
                key={productLine.productLineId}
                productLine={productLine}
              />
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}

const PRODUCT_CATEGORY_QUERY = gql`
  query productCategoryQuery($id: ID!) {
    ProductCategory(id: $id) {
      id
      productCategoryName:name
      productLines{
        productLineId:id
        productLineName:name
        productLineImageUrl:imageUrl
        products {
          productId:id
          productName:name
          productOrderNumber:orderNumber
          productType:type
          productImageUrl:imageUrl
          displayOrder
          properties {
            propertyName:name
            propertyValue:value
            propertyUnit:unit
            propertyType:type
            propertyRelevantField:relevantField
          }  
        }
      }
    }
  }
`

const ProductCategoryProductListPageWithGraphQL = compose(
  graphql(PRODUCT_CATEGORY_QUERY, {
    name: 'productCategoryQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  })
)(ProductCategoryProductList)


export default withRouter(ProductCategoryProductListPageWithGraphQL)