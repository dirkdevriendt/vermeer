import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../css/Products.css';

export default class ProductLine extends React.Component {

  render() {
    
    
    let productLineId=this.props.productLine.id
    if (this.props.productLine.productLineId) productLineId=this.props.productLine.productLineId
    

    let productLineName=this.props.productLine.name
    if (this.props.productLine.productLineName) productLineName=this.props.productLine.productLineName
    
    let productLineSubTitle=this.props.productLine.subTitle

    let productLineDescription=this.props.productLine.description
    if (this.props.productLine.productLineDescription) productLineDescription=this.props.productLine.productLineDescription

    let productLineImageUrl=this.props.productLine.imageUrl
    if (this.props.productLine.productLineImageUrl) productLineImageUrl=this.props.productLine.productLineImageUrl

    let imageDiv=(<div
      className={classes.ProductImage}
    />)
    if (productLineImageUrl){
      imageDiv=(
      <div
        className={classes.ProductImage}
        style={{
          backgroundImage: `url(${productLineImageUrl})`,
        }}
      />)
    }

    return (
      <div>
        <div className={classes.MainText}>
          <h1>{productLineName}</h1>  
          <h2>{productLineSubTitle}</h2>  
        </div>
        <div className='bg-white flex flex-column no-underline br2 h-100'>
          {imageDiv}
          <div 
            className='items-center black-80 fw3 description' 
            style={{
              width:'60%',
              margin:'auto',
              marginTop:'1em'
            }}
            dangerouslySetInnerHTML={{__html:  productLineDescription.join('')}}>
          </div>
        </div>
      </div>
    )
  }

}