import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ProductLineProductLinkList from '../components/ProductLineProductLinkList'
import ProductCategoryHeader from '../components/Cards/ProductCategoryHeaderCard'
import ProductLinesTab from '../components/Tabs/ProductLinesTab'
import gql from 'graphql-tag'

import classes from '../css/Products.css';

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
        <ProductCategoryHeader  
          productCategory={ProductCategory}
        />
        <ProductLinesTab
          productLines={ProductCategory.productLines}
        />
        {
          /*
            <div className={'w-100 flex justify-center pa6'}>
              <div className='w-100 bg-dark-green'>
                {ProductCategory.productLines && ProductCategory.productLines.map(productLine => (
                  <ProductLineProductLinkList 
                    key={productLine.productLineId}
                    productLine={productLine}
                  />
                ))
              }
              </div>
            </div>
          */
        }
      </div>
    )
  }
}

const PRODUCT_CATEGORY_QUERY = gql`
  query productCategoryQuery($id: ID!) {
    ProductCategory(id: $id) {
      id
      productCategoryName:name
      productCategoryImageUrl:imageUrl
      productLines(filter: {parentProductLine: null}, orderBy: displayOrder_ASC){
        productLineId:id
        productLineName:name
        productLineImageUrl:imageUrl
        showAsProduct
        products (orderBy:displayOrder_ASC){
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
        childrenProductLines(orderBy:displayOrder_ASC){
          productLineId:id
          productLineName:name
          productLineImageUrl:imageUrl
          showAsProduct
          parentProductLine{
            parentProductLineId:id
          }
          products (orderBy:displayOrder_ASC){
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
          childrenProductLines(orderBy:displayOrder_ASC){
            productLineId:id
            productLineName:name
            productLineImageUrl:imageUrl
            showAsProduct
            parentProductLine{
              parentProductLineId:id
            }
            products (orderBy:displayOrder_ASC){
              productId:id
              roductName:name
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
      childrenProductCategories{
        childProductCategoryId:id
        childProductCategoryName:name
      }
      productsLinked{
        linkedProductId:id
        linkedProductName:name
        linkedProductOrderNumber:orderNumber
        linkedProductType:type
        linkedProductImageUrl:imageUrl
        linkedProductDisplayOrder:displayOrder
        properties {
          linkedProductPropertyName:name
          linkedProductPropertyValue:value
          linkedProductPropertyUnit:unit
          linkedProductPropertyType:type
          linkedProductPropertyRelevantField:relevantField
        }
      }
      productLinesLinked{
        productLineId:id
        productLineName:name
        productLineImageUrl:imageUrl
        showAsProduct
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