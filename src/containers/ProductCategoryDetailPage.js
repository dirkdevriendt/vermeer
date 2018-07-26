import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ProductLine from './ProductLine'
import gql from 'graphql-tag'

class ProductCategoryDetailPage extends React.Component {

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
        <div className={'main-text'}>
          <h1>{ProductCategory.productCategoryName}</h1>  
        </div>
        <div className={'w-100 flex justify-center pa6'}>
          <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
          
            {ProductCategory.productLines && ProductCategory.productLines.map(productLine => (
              <ProductLine
                key={productLine.productLineId}
                productLine={productLine}
                refresh={() => this.props.productCategoryQuery.refetch()}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  handleDelete = async () => {
    await this.props.deleteProductCategoryMutation({variables: {id: this.props.productCategoryQuery.Post.id}})
    this.props.history.replace('/')
  }
}

const DELETE_PRODUCT_CATEGORY_MUTATION = gql`
  mutation DeleteProductCategoryMutation($id: ID!) {
    deleteProductCategory(id: $id) {
      id
    }
  }
`

const PRODUCT_CATEGORY_QUERY = gql`
  query productCategoryQuery($id: ID!) {
    ProductCategory(id: $id) {
      id
      productCategoryName:name
      productLines{
        productLineId:id
        productLineName:name
        imageUrl
      }
    }
  }
`

//const PRODUCT_LINES_QUERY = gql`
//  query productLinesQuery($id: ID!) {
//    allProductLines(productCategoryId: $id, orderBy: displayOrder_DESC) {
//      id
//      imageUrl
//      name
//    }
// }
//`

const ProductCategoryDetailPageWithGraphQL = compose(
  graphql(PRODUCT_CATEGORY_QUERY, {
    name: 'productCategoryQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(DELETE_PRODUCT_CATEGORY_MUTATION, {
    name: 'deleteProductCategoryMutation'
  })
  //,
  //graphql(PRODUCT_LINES_QUERY, {
  //  name: 'productLinesQuery',
  //  options: ({match}) => ({
  //    variables: {
  //      id: match.params.id,
  //    },
  //  }),
  // }),
)(ProductCategoryDetailPage)



const ProductCategoryDetailPageWithDelete = graphql(DELETE_PRODUCT_CATEGORY_MUTATION)(ProductCategoryDetailPageWithGraphQL)

export default withRouter(ProductCategoryDetailPageWithDelete)