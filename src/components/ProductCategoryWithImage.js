import React from 'react'
import { Link } from 'react-router-dom'

export default class ProductCategory extends React.Component {
 

  

  render() {
    let imageDiv

    if (this.props.productCategory.imageUrl){
      imageDiv=(
        <div 
          className='image' 
          style={{
            backgroundImage: `url(${this.props.productCategory.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingBottom: '100%',
          }}
        />
      )
    }  
    return (
      <Link
        className='bg-white ma3 box post flex flex-column no-underline br2'
        to={`/productCategory/${this.props.productCategory.id}`}
      >
        {imageDiv}
        <div className='flex items-center black-80 fw3 description'>
          {this.props.productCategory.name}
        </div>
      </Link>
    )
  }

}