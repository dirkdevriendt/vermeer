import React from 'react'
import { Link } from 'react-router-dom'

export default class Product extends React.Component {

  render() {

    let productId=this.props.product.id
    if (this.props.product.productId) productId=this.props.product.productId
    

    let productName=this.props.product.name
    if (this.props.product.productName) productName=this.props.product.productName
    

    return (
      <Link
        className='bg-white ma3 box post flex flex-column no-underline br2'
        to={`/post/${productId}`}
      >
        <div className='flex items-center black-80 fw3 name'>
          {productName}
          {this.props.product.type}
        </div>
      </Link>
    )
  }

}