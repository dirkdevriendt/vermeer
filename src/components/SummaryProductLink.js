import React from 'react'
import { Link } from 'react-router-dom'

import ProductPropertyUl from '../components/ProductPropertyUl'
import classes from '../containers/Products.css';

export default class SummaryProductLink extends React.Component {

  render() {

    let productId=this.props.product.id
    if (this.props.product.productId) productId=this.props.product.productId
    

    let productName=this.props.product.name
    if (this.props.product.productName) productName=this.props.product.productName
   
    let productType=this.props.product.type
    if (this.props.product.productType) productType=this.props.product.productType

    let productImageUrl=this.props.product.imageUrl
    if (this.props.product.productImageUrl) productImageUrl=this.props.product.productImageUrl
    else if (this.props.productLineImageUrl) productImageUrl=this.props.productLineImageUrl
    let productImageDiv=(
      <div
        className={'w-50 bg-washed-green '+classes.ProductImage}
        style={{
          height:'30vh',
          marginTop:0,
          marginBottom:'5px'
        }}
      />
    )
  
    if (productImageUrl){
      productImageDiv=(
        <div
          className={'w-50 '+classes.ProductImage}
          style={{
            backgroundImage: `url(${productImageUrl})`,
            height:'30vh',
            marginTop:0,
            marginBottom:'5px'
          }}
        />
      )
    }
        

    return (
      <div className={'flex justify-center '+ classes.SummaryProductLink}>
        {productImageDiv}
        <div className='w-50 bg-washed-green ' style={{height:'30vh'}}>
        <h3>{productName} {productType}</h3>
        <ProductPropertyUl
          properties={this.props.product.properties}
        />
        </div>
      </div>
    )
  }

}