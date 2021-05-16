import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {



    const EmptyCart = () => {

        return (
            <><Typography variant="subtitle1" >Your Cart is Empty
            <Link to="/" className={classes.link}>Click Here to Add</Link>

            </Typography>
            </>
        )
    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((items) => (


                        <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                            <CartItem item={items} handleUpdateCartQuantity={handleUpdateCartQuantity}
                                handleRemoveFromCart={handleRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4" >Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>





            </>
        )
    }
    const classes = useStyles();
    //initially while fetching cart line_items are wmpty so to prevent that this condition is required
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
