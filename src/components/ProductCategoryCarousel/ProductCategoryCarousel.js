import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ProductCategoryCarousel.css'
import imageClasses from '../Images.css'

export default class ProductCategoryCarousel extends React.Component {

  render() {
    
    let imageDiv=(<div
      className='image'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '100%',
      }}
    />)
    if (this.props.productCategory.imageUrl){
      imageDiv=(<div
        className='image'
        style={{
          backgroundImage: `url(${this.props.productCategory.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingBottom: '100%',
        }}
      />)
    }

    let productCategoryId=this.props.productCategory.id
    if (this.props.productCategory.productCategoryId) productCategoryId=this.props.productCategory.productCategoryId
    
    let productCategoryName=this.props.productCategory.name
    if (this.props.productCategory.productCategoryName) productCategoryName=this.props.productCategory.productCategoryName

    let productCategoryImage
    if (this.props.productCategory.imageUrl)
      productCategoryImage= this.props.productCategory.imageUrl;

    imageDiv=(
      <div className={classes.ProductCategoryCarousel}> 
        <img src={productCategoryImage} alt={productCategoryName}/>
      </div>
    );
    
    return (  
      <div className={imageClasses.ImageBox}>
      {
        //<Link    
        //  to={`/productCategory/${productCategoryId}`}
        //>
      }
          {imageDiv}
          {
            //<div className='flex items-center black-80 fw3 name'>
            //  {productCategoryName}
            //</div>
        }
      {
        //  </Link>
      }
      </div>
    )
  }

}