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
        

    return (
      <div className={classes.SummaryProductLink}>
        {productImageDiv}
        <h3>{productName} {productType}</h3>
        <ProductPropertyUl
          properties={this.props.product.properties}
        />
      </div>
    )
  }

}