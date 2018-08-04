import React from "react";
import Aux from '../../hoc/Aux/Aux';
import ProductCategoryOverview from '../../containers/ProductCategoryOverview/ProductCategoryOverview';

const layout=(props)=>(
    <Aux>
        <div>ToolBar,SideDrawer,BackDrop</div>
        <main>
            {props.children}
            <ProductCategoryOverview />
        </main>
    </Aux>
);

export default layout;