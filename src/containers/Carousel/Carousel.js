import React from 'react'

import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//import ProductCategoryCarousel from '../../components/ProductCategoryCarousel/ProductCategoryCarousel'
import imageClasses from '../../components/Images.css'
import classes from './Carousel.css'

class Carousel  extends React.Component {
  render (){
    const Container = styled.div`
      border: 1px solid red;
      position: relative;
      overflow: hidden;
      width: 900px;
      height: 450px;
      background-color:#00adaa
      background: #00adaa; /* For browsers that do not support gradients */
      background: radial-gradient(closest-corner at 80% 30%, #00adaa, #006b60);
      display:flex;
    `;
    const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);

    if (this.props.allProductCategoriesQuery.loading) {
      return (
        <div className={'flex justify-center'}>
          <Carousel defaultWait={5000} >
            <div className='flex w-100 h-100 items-center justify-center pt7'>
              <div>
                Loading
                (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
              </div>
            </div>
          </Carousel>
        </div>
      )
    }

    return(
      <div className={'flex justify-center'}>
        <Carousel defaultWait={60000} /*wait for 1000 milliseconds*/ >
          {this.props.allProductCategoriesQuery.allProductCategories && this.props.allProductCategoriesQuery.allProductCategories.map(productCategory => (
            <Slide right key={productCategory.id}>
              
              <div className={imageClasses.ImageBox}>
                <div className={classes.CarouselImageBox}>
                  <img src={productCategory.imageUrl} alt={productCategory.name}/>
                </div>
              </div>
            </Slide>  ))
          }
        </Carousel>
      </div>
    )
  }
}

const ALL_PRODUCT_CATEGORIES_QUERY = gql`
  query allProductCategoriesQuery {
    allProductCategories(orderBy: displayOrder_ASC) {
      id
      name
      imageUrl
    }
  }
`

const ProductCategoryOverviewWithQuery = graphql(ALL_PRODUCT_CATEGORIES_QUERY, {
  name: 'allProductCategoriesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Carousel)

export default ProductCategoryOverviewWithQuery