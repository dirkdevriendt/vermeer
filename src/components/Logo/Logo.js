import React from 'react';

import bagelaLogo from '../../assets/images/bagela-logo.jpg';
import vermeerLogo from '../../assets/images/vermeer_logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={vermeerLogo} alt="Vermeer" />
    </div>
);

export default logo;