import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Products.css';

export default class ProductCategory extends React.Component {
  render() {
    return (
      <Link
        className={'bg-white ma3 productCategory item flex flex-column no-underline br2'+classes.Item}
        to={`/productCategory/${this.props.productCategory.id}`}
      >
        <div className={'flex items-center black-80 fw3 description'+classes.ItemLink}>
          {this.props.productCategory.name}
        </div>
      </Link>
    )
  }
}