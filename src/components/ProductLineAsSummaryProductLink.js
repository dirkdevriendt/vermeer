import React from 'react'
import { Link } from 'react-router-dom'

import Button from './UI/Button/Button';
import ProductPropertyUl from './ProductPropertyUl'
import productClasses from '../css/Products.css';
import imageClasses from '../css/Images.css';


export default class ProductLineAsSummaryProductLink extends React.Component {

  render() {

    let productLineName=this.props.productLine.name
    if (this.props.productLine.productLineName) productLineName=this.props.productLine.productName
   
    let productLineImageUrl=this.props.productLine.imageUrl
    if (this.props.productLine.productImageUrl) productLineImageUrl=this.props.productLine.productImageUrl
    
    let productLineImageDiv=(
      <div
        className={'w-30 bg-washed-green '+productClasses.ProductImage}
        style={{
          height:'30vh',
          marginTop:0,
          marginBottom:'5px'
        }}
      />
    )

    if (productLineImageUrl){
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
      productLineImageDiv= (
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
          <img src={productLineImageUrl} alt={productLineName}/>
        </div>
        </div>
        </div>
      ) 
    }
        

    return (
      <div 
        className={'flex justify-center '+ productClasses.SummaryProductLink} >
        {productLineImageDiv}
        <div className='w-70 bg-washed-green ' style={{height:'30vh',padding:'5px'}}>
          <h3>{productLineName} </h3>
          {/*
            <ProductPropertyUl
              properties={this.props.product.properties}
            />
          */
          }
          
          <Button style={{color:'#000'}}>Add to Purchase Cart</Button>
        </div>
      </div>
    )
  }

}