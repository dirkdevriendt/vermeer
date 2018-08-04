import React, { Component } from 'react';
import ProductLineList from '../ProductLineList'
import Carousel from '../Carousel/Carousel'

class Home extends Component {   
    render () {
        return (
            <div>
                <Carousel />
                {/*<ProductLineList />*/}
            </div>
        );
    }
}

export default Home;