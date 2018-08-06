import React from 'react'
import { Link } from 'react-router-dom'

import SummaryProductLink from './SummaryProductLink'
import classes from '../containers/Products.css';

export default class ProductLineProductLink extends React.Component {

  render() {
    let productLineName=this.props.productLine.name
    if (this.props.productLine.productLineName) productLineName=this.props.productLine.productLineName
   
    let productLineImageUrl=this.props.productLine.imageUrl
    if (this.props.productLine.productLineImageUrl) productLineImageUrl=this.props.productLine.productLineImageUrl

    let productLineImageDiv
    if (productLineImageDiv){
      productLineImageDiv=(
        <div
          className={classes.ProductImage}
          style={{
            backgroundImage: `url(${productLineImageUrl})`
          }}
        />
      )
    }
        
    return (
      <div className={'bg-green '+ classes.ProductLineProductLinkList}>
        <h2>{productLineName}</h2>
        <div className={'flex flex-column'}>
          {this.props.productLine.products && this.props.productLine.products.map(product => (    
            <SummaryProductLink
              key={product.productId}
              product={product}
              productLineImageUrl={productLineImageUrl}
            />
          ))}
        </div>
      </div>
    )
  }

}