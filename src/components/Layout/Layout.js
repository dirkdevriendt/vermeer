import React from "react";
import Aux from '../../hoc/Aux/Aux';
import ProductTypeOverview from '../ProductTypeOverview/ProductTypeOverview';

const layout=(props)=>(
    <Aux>
        <div>ToolBar,SideDrawer,BackDrop</div>
        <main>
            {props.children}
            <ProductTypeOverview />
        </main>
    </Aux>
);

export default layout;