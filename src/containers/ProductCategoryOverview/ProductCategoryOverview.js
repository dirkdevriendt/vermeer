import React from 'react';
//import Aux from '../../hoc/Auxiliar/Auxiliar';
import classes from './ProductCategoryOverview.css';

import ProductCategory from '../../components/ProductCategory'
import ProductCategoryCard from '../../components/Cards/ProductCategoryCard'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductCategoryOverview extends React.Component {

    componentWillReceiveProps(nextProps) {
      //if (!this.props.location.key || !nextProps.location.key || (this.props.location.key !== nextProps.location.key)) {
      //  this.props.allProductCategoriesQuery.refetch()
      //}
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
    
        //let blurClass = ''
        //if (this.props.location.pathname !== '/') {
        //  blurClass = ' blur'
        //}
    
        return(
            <div className={classes.ProductCategoryOverview}>
              <div className={classes.HeaderDiv}>
                <h1>Our Product Categories</h1>
              </div>
              {
                /*
                  <div className={'w-100 flex flex-wrap justify-center'}>
                    {this.props.allProductCategoriesQuery.allProductCategories && this.props.allProductCategoriesQuery.allProductCategories.map(productCategory => (
                        <ProductCategory
                          key={productCategory.id}
                          productCategory={productCategory}
                          refresh={() => this.props.allProductCategoriesQuery.refetch()}
                        />))
                    }
                  </div>
                */
              }
              <div className={'w-100 flex flex-wrap justify-center'}>
                {this.props.allProductCategoriesQuery.allProductCategories && this.props.allProductCategoriesQuery.allProductCategories.map(productCategory => (
                    <ProductCategoryCard
                      key={productCategory.id}
                      productCategory={productCategory}
                      refresh={() => this.props.allProductCategoriesQuery.refetch()}
                    />))
                }
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

const ProductCategoryOverviewWithQuery = graphql(ALL_PRODUCT_CATEGORIES_QUERY, {
  name: 'allProductCategoriesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(ProductCategoryOverview)

export default ProductCategoryOverviewWithQuery
