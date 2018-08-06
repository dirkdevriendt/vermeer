import React from 'react'
import { Link } from 'react-router-dom'

import Button from './UI/Button/Button';
import ProductPropertyUl from '../components/ProductPropertyUl'
import productClasses from '../css/Products.css';
import imageClasses from '../css/Images.css';


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
        className={'w-30 bg-washed-green '+productClasses.ProductImage}
        style={{
          height:'30vh',
          marginTop:0,
          marginBottom:'5px'
        }}
      />
    )

    if (productImageUrl){
      //productImageDiv=(
      //  <div
      //    className={'w-50 '+classes.ProductImage}
      //    style={{
      //      backgroundImage: `url(${productImageUrl})`,
      //      height:'30vh',
      //      marginTop:0,
      //      marginBottom:'5px'
      //    }}
      //  />
      //)
      productImageDiv= (
       <div 
        className={'w-30 '+ imageClasses.ImageContainer}
        style={{
          height:'30vh',
          marginTop:0,
          marginBottom:'5px'
        }}
        > 
       <div className={imageClasses.ImageBox} >
        <div className={imageClasses.SummaryImageBox} style={{
            
        }}>
          <img src={productImageUrl} alt={productName}/>
        </div>
        </div>
        </div>
      ) 
    }
        

    return (
      <div 
        className={'flex justify-center '+ productClasses.SummaryProductLink} >
        {productImageDiv}
        <div className='w-70 bg-washed-green ' style={{height:'30vh',padding:'5px'}}>
          <h3>{productName} {productType}</h3>
          <ProductPropertyUl
            properties={this.props.product.properties}
          />
          <Button style={{color:'#000'}}>Add to Purchase Cart</Button>
        </div>
      </div>
    )
  }

}