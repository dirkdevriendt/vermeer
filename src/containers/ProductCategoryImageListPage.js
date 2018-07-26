import React from 'react'
import { Link } from 'react-router-dom'
import ProductCategoryWithImage from '../components/ProductCategoryWithImage'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductCategoryListPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allProductCategoriesQuery.refetch()
    }
  }

  render() {
    if (this.props.allProductCategoriesQuery.loading) {
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
            <div>New Product Category</div>
          </Link>
          {this.props.allProductCategoriesQuery.allProductCategories && this.props.allProductCategoriesQuery.allProductCategories.map(productCategory => (
            <ProductCategoryWithImage
              key={productCategory.id}
              productCategory={productCategory}
              refresh={() => this.props.allProductCategoriesQuery.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}

const ALL_PRODUCT_CATEGORIES_QUERY = gql`
  query allProductCategoriesQuery {
    allProductCategories(orderBy: displayOrder_ASC) {
      id
      imageUrl
      name
    }
  }
`

const ListPageWithQuery = graphql(ALL_PRODUCT_CATEGORIES_QUERY, {
  name: 'allProductCategoriesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(ProductCategoryListPage)

export default ListPageWithQuery
