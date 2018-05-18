import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'BTT.08.10 Haspelaandrijving', name: 'BTT.08.10 Haspelaandrijving', type: 'haspelwagen_langzaam' },
    { label: 'ZW1100', name: 'ZW1100',type: 'haspelwagen_langzaam' },
    { label: 'Variant 100', name: 'Variant 100', type: 'haspelwagen_snel' },
    { label: 'Variant 130', name: 'Variant 130', type: 'haspelwagen_snel' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.productAdded(ctrl.name)}
                removed={() => props.productRemoved(ctrl.name)}
                disabled={props.disabled[ctrl.name]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;