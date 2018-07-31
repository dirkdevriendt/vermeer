import React from 'react'
import classes from '../containers/Products.css';

export default class ProductPropertyUl extends React.Component {

  render() {
    return (
      <div className={classes.productProperties}>
        <ul>
        {this.props.properties.map(productProperty=>(
          <li key={productProperty.propertyId}>{productProperty.propertyName}: {productProperty.propertyValue} {productProperty.propertyUnit?productProperty.propertyUnit:""}</li>
        ))}
        </ul>
      </div>
    )
  }

}