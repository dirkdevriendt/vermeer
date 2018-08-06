import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../css/Products.css';

export default class ProductCategory extends React.Component {
  render() {
    return (
      <Link
        className={'bg-white ma3 productCategory item no-underline br2 '+classes.Item}
        to={`/productCategory/${this.props.productCategory.id}`}
      >
        {this.props.productCategory.name}
      </Link>
    )
  }
}