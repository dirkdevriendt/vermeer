import React from 'react'
import { Link } from 'react-router-dom'

import ProductPropertyUl from '../components/ProductPropertyUl'
import classes from '../containers/Products.css';

export default class DetailedProduct extends React.Component {

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
    let productAllProperties
    if (this.props.product.properties){
      productAllProperties=(
      <div className={classes.productProperties}>
        
        <ul>
        {this.props.product.properties.map(productProperty=>(
          <li key={productProperty.propertyId}>{productProperty.propertyName}: {productProperty.propertyValue} {productProperty.propertyUnit?productProperty.propertyUnit:""}</li>
        ))}
        </ul>
      }
      </div>
      )
    }
    let productDescriptionDiv
    if (productDescription){
      productDescriptionDiv=(
        <div
          className={'flex items-center black-80 fw3 name'  + classes.ProductDescription}
          dangerouslySetInnerHTML={{__html: 
            productDescription.join('')}}>
        </div>
      )
    }
    
    return (
      <div className={classes.ProductInfo}>
        <h2>Info for product {productName} - {productType?productType:''}</h2>
        {productImageDiv}
        <h3>Product Properties</h3>
        <ProductPropertyUl
          properties={this.props.product.properties}
        />
        {productDescriptionDiv}
      </div>
    )
  }

}