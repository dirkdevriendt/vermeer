import React from 'react'
import { Link } from 'react-router-dom'

export default class ProductLine extends React.Component {

  render() {
    
    let imageDiv=(<div
      className='image'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '100%',
      }}
    />)
    if (this.props.productLine.imageUrl){
      imageDiv=(<div
        className='image'
        style={{
          backgroundImage: `url(${this.props.productLine.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingBottom: '100%',
        }}
      />)
    }
    
    

    let productLineId=this.props.productLine.id
    if (this.props.productLine.productLineId) productLineId=this.props.productLine.productLineId
    

    let productLineName=this.props.productLine.name
    if (this.props.productLine.productLineName) productLineName=this.props.productLine.productLineName
    
    return (
      <Link
        className='bg-white ma3 box product-line flex flex-column no-underline br2'
        to={`/productLine/${productLineId}`}
      >
        {imageDiv}
        <div className='flex items-center black-80 fw3 name'>
          {productLineName}
        </div>
      </Link>
    )
  }

}