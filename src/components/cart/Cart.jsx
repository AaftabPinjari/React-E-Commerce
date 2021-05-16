import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './cartItem/CartItem';

const Cart = ({ cart }) => {



    const EmptyCart = () => {

        return (
            <><Typography variant="subtitle1" >Your Cart is Empty</Typography></>)
    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (


                        <Grid item xs={12} sm={6} key={item.id}>
                            <CartItem item={item} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4" >Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>





            </>
        )
    }
    const classes = useStyles();

    if (!cart.line_items) return 'Loading...'



    return (
        <div>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3">Your Cart</Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    )
}

export default Cart
