import React from 'react'
import classes from '../css/Products.css';

export default class ProductPropertyUl extends React.Component {

  render() {
    return (
      <div className={classes.productProperties}>
        <ul>
        {this.props.properties.map(productProperty=>{
            if (productProperty.propertyRelevantField)
              return <li key={productProperty.propertyId}>{productProperty.propertyName}: {productProperty.propertyValue} {productProperty.propertyUnit?productProperty.propertyUnit:""}</li>
            else 
              return ""
          } 
        )}
        </ul>
      </div>
    )
  }

}