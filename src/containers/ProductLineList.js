import React from 'react'
import { Link } from 'react-router-dom'
import ProductLine from './ProductLine'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductLineList extends React.Component {

  componentWillReceiveProps(nextProps) {
    //if (!this.props.location.key || !nextProps.location.key || this.props.location.key !== nextProps.location.key) {
    //  //this.props.allProductLinesQuery.refetch()
    //}
  }

  render() {
    if (this.props.allProductLinesQuery.loading) {
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

    return (
      <div>
        <div className={'main-text'}>
          <h1>Product Lines</h1>  
        </div>
      <div className='w-100 flex justify-center pa6'
        style={{display:"flex"}}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
          {
            //<Link
            //  to='/create'
            //  className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
            //>
            //  <img
            //    src={require('../assets/plus.svg')}
            //    alt=''
            //    className='plus mb3'
            //  />
            //  <div>New Product Line</div>
            //</Link>
          }
          {this.props.allProductLinesQuery.allProductLines && this.props.allProductLinesQuery.allProductLines.map(productLine => (
            <ProductLine
              key={productLine.id}
              productLine={productLine}
              refresh={() => this.props.allProductLinesQuery.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
      </div>
    )
  }
}

const ALL_PRODUCT_LINES_QUERY = gql`
  query allProductLinesQuery {
    allProductLines(orderBy: displayOrder_DESC) {
      id
      imageUrl
      name
    }
  }
`

const ProductLineListWithQuery = graphql(ALL_PRODUCT_LINES_QUERY, {
  name: 'allProductLinesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(ProductLineList)

export default ProductLineListWithQuery
