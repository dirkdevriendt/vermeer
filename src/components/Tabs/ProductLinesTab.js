import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProductLineProductLinkList from '../ProductLineProductLinkList'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class ProductLinesTab extends React.Component {
  constructor(props){
    super(props);
    console.log("[ProductLinesTab.js] Inside Constructor", props);
    this.state = {
      productLineId: 'all',
      productLineName:'All Product Lines',
      displayedProductLines:this.props.productLines,
      allProductLines:this.props.productLines
    };
    //this.handleChange=this.handleChange.bind(this); //https://reactjs.org/docs/handling-events.html
  }

  handleChange = (event, value) => {
    //let displayedProductLines=this.state.allProductLines
    //if (value!=='all'){
    //  displayedProductLines=this.state.allProductLines
    //    .filter(
    //      productLine=>
    //      (productLine.parentProductLine.id===value)
    //    );  
    //}
    //const currentState=this.state;
    this.setState({productLineId:value});
   //this.setState({productLineName:value==='all'?'All Product Lines':props.productLines.filter(productLine=>productLine.productLineId===value)[0].productLineName});
    //this.setState({displayedProductLines:displayedProductLines});
    this.setState((prevState, props) => {
      let displayedProductLines=props.productLines
      if (value!=='all'){
        displayedProductLines=props.productLines
          .filter(
            productLine=>
            (productLine.productLineId===value||(productLine.parentProductLine&&productLine.parentProductLine.parentProductLineId===value))
          );  
    }
      let newState  ={...prevState}
      newState.productLineName=value==='all'?'All Product Lines':props.productLines.filter(productLine=>productLine.productLineId===value)[0].productLineName
      //newState.displayedProductLines=value==='all'?props.productLines:props.productLines.filter(productLine=>(productLine.parentProductLine && productLine.parentProductLine.id===value))
      newState.displayedProductLines=value==='all'?props.productLines:displayedProductLines
      return newState
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.productLineId} onChange={this.handleChange}>
            <Tab value="all" label="All Product Lines" />
            {this.props.productLines && this.props.productLines
              .filter(productLine => !productLine.showAsProduct)
              .map(productLine => (
                <Tab key={productLine.productLineId} value={productLine.productLineId} label={productLine.productLineName} />
              ))
            }
          </Tabs>
        </AppBar>
        
              <TabContainer>
                <h2>{this.state.productLineName}</h2>
                {
                  (this.state.displayedProductLines.length>0 && this.state.displayedProductLines
                  //.filter(productLine => !productLine.showAsProduct)
                  .map(productLine => ( 
                    <ProductLineProductLinkList 
                      key={productLine.productLineId}
                      productLine={productLine}
                    />
                  ))
                )
              }
              </TabContainer>
            
            
        
       
        
      </div>
    );
  }
}

ProductLinesTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductLinesTab);