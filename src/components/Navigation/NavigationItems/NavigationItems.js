import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/Products">Products</NavigationItem>
        <NavigationItem link="/About">About Us</NavigationItem>
        <NavigationItem link="/Contact">Contact</NavigationItem>
        {
            //<NavigationItem link="/Checkout">Checkout</NavigationItem>
        }
    </ul>
);

export default navigationItems;