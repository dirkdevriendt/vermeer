import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../containers/Products.css';

export default class SummaryProduct extends React.Component {

  render() {

    let productId=this.props.product.id
    if (this.props.product.productId) productId=this.props.product.productId
    

    let productName=this.props.product.name
    if (this.props.product.productName) productName=this.props.product.productName
   
    let productDescription=this.props.product.description
    if (this.props.product.productDescription) productDescription=this.props.product.productDescription

    let productType=this.props.product.type
    if (this.props.product.productType) productType=this.props.product.productType

    let productImageUrl=this.props.product.imageUrl
    if (this.props.product.productImageUrl) productImageUrl=this.props.product.productImageUrl

    let productImageDiv
    if (productImageUrl){
      productImageDiv=(
        <div
          className={classes.ProductImage}
          style={{
            backgroundImage: `url(${productImageUrl})`
          }}
        />
      )
    }
    let productDescriptionDiv
    if (productDescription){
      productDescriptionDiv=(
        <div
          className={classes.ProductDescription}
          dangerouslySetInnerHTML={{__html: 
            productDescription.join('')}}>
        </div>
      )
    }
    let productHeader
    let productInfo
    
    if (productImageDiv || productDescriptionDiv){
      productHeader=<h2>Info for product {productName} - {productType?productType:''}</h2>
      productInfo=(
        <div className={classes.ProductInfo}>
          {productImageDiv}
          {productDescription}
        </div>
      )
    }



    let productOutput=(
      <div className={'flex items-center black-80 fw3 name'}>
        {productHeader}
        {productInfo}
      </div>
    )
    if (this.props.provideLink){
      productOutput=(
        <Link
          className='bg-white ma3 box post flex flex-column no-underline br2'
          to={`/post/${productId}`}
        >
        {productOutput}  
        </Link>
      )
    }

    return (
      {productOutput}
    )
  }

}