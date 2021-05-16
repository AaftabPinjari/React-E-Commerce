import React from 'react'
import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'


// product coming from Products.jsx as props through commercejs and App.js
const Product = ({ product, onAddToCart }) => {


    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}>

                </CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" >
                            {product.name}
                        </Typography>
                        <Typography variant="h5" >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h5" color='textSecondary' />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions} >
                    <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
