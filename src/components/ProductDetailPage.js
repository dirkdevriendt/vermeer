import React from 'react'
import { graphql, compose } from 'react-apollo'
import Modal from 'react-modal'
import modalStyle from '../constants/modalStyle'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

const detailModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    height: 761,
  },
}

class ProductDetailPage extends React.Component {

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

    return (
      <Modal
        isOpen
        contentLabel='Create Post'
        style={detailModalStyle}
        onRequestClose={this.props.history.goBack}
      >
        <div
          className='close fixed right-0 top-0 pointer'
          onClick={this.props.history.goBack}
        >
          <img src={require('../assets/close.svg')} alt='' />
        </div>
        <div
          className='delete ttu white pointer fw6 absolute left-0 top-0 br2'
          onClick={this.handleDelete}
        >
          Delete
        </div>
        <div
          className='bg-white detail flex flex-column no-underline br2 h-100'
        >
          <div className='flex items-center black-80 fw3 name'>
            {Product.name} {Product.type}
          </div>
        </div>
      </Modal>
    )
  }

  handleDelete = async () => {
    await this.props.deleteProductMutation({variables: {id: this.props.productQuery.Product.id}})
    this.props.history.replace('/')
  }
}

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    Post(id: $id) {
      id
      imageUrl
      name
      type
    }
  }
`

const ProductDetailPageWithGraphQL = compose(
  graphql(PRODUCT_QUERY, {
    name: 'productQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(DELETE_PRODUCT_MUTATION, {
    name: 'deleteProductMutation'
  })
)(ProductDetailPage)



const ProductDetailPageWithDelete = graphql(DELETE_PRODUCT_MUTATION)(ProductDetailPageWithGraphQL)

export default withRouter(ProductDetailPageWithDelete)
