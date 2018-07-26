import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
//import Product from '../components/Product'
import gql from 'graphql-tag'


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

    let imageDiv=(
      <div
        className='image'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingBottom: '100%',
        }}
      />
    )
    if (ProductLine.imageUrl){
      imageDiv=(
        <div
          className='image'
          style={{
            backgroundImage: `url(${ProductLine.imageUrl})`,
            //backgroundSize: 'cover',
            backgroundPosition: 'center',
            //paddingBottom: '100%',
            height:'400px',
            width:'600px',
            margin:'auto',
            marginTop:'1em'
          }}
        />
      )
    }

    let productTable
    if (ProductLine.products){
      let firstProduct=ProductLine.products.slice(0,1)[0]
      productTable=(
        <table>
          <thead>
            <tr>
            {firstProduct.properties.map(prName => (
              <th>{prName.name}</th>
            ))}
            </tr>
          </thead>
          <tbody>
          {ProductLine.products.map(product => (
            <tr>
              {product.properties.map(prVal=>(
                <td>{prVal.value}</td>
              ))}
            </tr>
          ))}    
          </tbody>
        </table>
     )
    }
    

    return (
      <div>
        <div className={'main-text'}>
          <h1>{ProductLine.name}</h1>  
          <h2>{ProductLine.subtitle}</h2>  
        </div>
        <div
          className='bg-white flex flex-column no-underline br2 h-100'
        >
          {imageDiv}
          <div 
            className='items-center black-80 fw3 description' 
            style={{
              width:'60%',
              margin:'auto',
              marginTop:'1em'
            }}
            dangerouslySetInnerHTML={{__html: 
        ProductLine.description.join('')}}>
          
          </div>
          {productTable}
          {
            //ProductLine.products && ProductLine.products.map(product => (
              //<Product
              //  key={product.productId}
              //  product={product}
              //  refresh={() => this.props.productLineQuery.refetch()}
              ///>
            //))
          }
        
        </div>
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
