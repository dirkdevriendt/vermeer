import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'#19a974',

  },
  content: {
    flex: '1 0 auto',
  },
  imageContainer:{
    backgroundColor:'#006b60',

    height:'224px' //grid use automatically adds padding 12
  },
  media: {
    //paddingTop: '56.25%', // 16:9
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height:'180px',
    marginTop:'10px'

  },
  /*
    root:{
      width: '25%',
      [theme.breakpoints.down('sm')]: {
        width: '50%'
      },
      [theme.breakpoints.up('md')]: {
        width: '32%'
      },
    },
  */
});  

function ProductCategoryHeaderCard(props) {
  const { classes, theme } = props;
  return (
    <div className={'container ma3 productCategory'}>
      
      <Card className={classes.card}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={7} className={classes.imageContainer}>
          
            <CardMedia
              className={classes.media}
              image={props.productCategory.productCategoryImageUrl}
              title={props.productCategory.productCategoryName}
            />
          
          </Grid>
          <Grid item xs={12} md={5} className={classes.details}>
          
            <CardContent className={classes.content}>
              <Typography variant="headline">{props.productCategory.productCategoryName}</Typography>
              <Grid container>
              
                <Grid item xs={props.productCategory.productLinesLinked.length>0?6:12}>
                  <Typography variant="subheading" color="textSecondary">Product Lines</Typography>    
                  {props.productCategory.productLines && props.productCategory.productLines
                    .filter(productLine => !productLine.showAsProduct)
                    .map(productLine => (
                      <Typography key={productLine.productLineId}>
                        {productLine.productLineName} 
                      </Typography>
                    ))
                  }
                </Grid>
                {
                  props.productCategory.productLinesLinked.length>0?
                    (
                    <Grid item xs={6}>
                      <Typography variant="subheading" color="textSecondary">Linked Product Lines</Typography>    
                        {props.productCategory.productLinesLinked && props.productCategory.productLinesLinked.map(productLine => (
                      <Typography key={productLine.productLineId}>{productLine.productLineName}</Typography>
                      ))
                    }
                    </Grid>
                    ):""
                }
                

              </Grid>

              {
                /*
                  props.productCategory.childrenProductCategories?
                    <Typography variant="subheading" color="textSecondary">no child categories</Typography>    
                    :<Typography variant="subheading" color="textSecondary">no child categories</Typography>    
                */
              }
            </CardContent>
            {
            /*
            <CardActions>
              <Button size="medium" color="secondary">
                Product Lines
              </Button>
              <Button size="medium" color="primary" href={`/productCategory/${props.productCategory.id}`}>
                Explore Products
              </Button>
            </CardActions>
            */
            }
          
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

ProductCategoryHeaderCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategoryHeaderCard);