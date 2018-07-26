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
      <Modal
        isOpen
        contentLabel='Create Product Category'
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
          <div
            className='image'
            style={{
              backgroundImage: `url(${ProductCategory.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              paddingBottom: '100%',
            }}
          />
          <div className='flex items-center black-80 fw3 name'>
            {ProductCategory.name}
          </div>
        </div>
      </Modal>
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
      imageUrl
      name
      ProductLine {
        id
        imageUrl
        name  
      }
    }
  }
`

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
)(ProductCategoryDetailPage)



const ProductCategoryDetailPageWithDelete = graphql(DELETE_PRODUCT_CATEGORY_MUTATION)(ProductCategoryDetailPageWithGraphQL)

export default withRouter(ProductCategoryDetailPageWithDelete)