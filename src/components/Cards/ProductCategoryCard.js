import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width:'94%',
    margin:'3%'
  },
};

function ProductCategoryCard(props) {
  const { classes } = props;
  return (
    <div className={'w-20 ma3 productCategory'}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          //image={`url(${this.props.productCategory.imageUrl})`}
          image={props.productCategory.imageUrl}
          title={props.productCategory.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.productCategory.name}
          </Typography>
          {
            //<Typography component="p">
            //  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            //  across all continents except Antarctica
            //</Typography>
          }
        </CardContent>
        <CardActions>
          <Button size="medium" color="secondary">
            Product Lines
          </Button>
          <Button size="medium" color="primary" href={`/productCategory/${props.productCategory.id}`}>
            Explore Products
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProductCategoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategoryCard);