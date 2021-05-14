import React from 'react'
import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name}>

                </CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" >
                            {product.name}
                        </Typography>
                        <Typography variant="h5" >
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h5" color='textSecondary' >
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions} >
                    <IconButton aria-label='Add to Cart'>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
