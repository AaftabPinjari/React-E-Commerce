import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h4" className={classes.title} color="inherit">
                        <img src="https://i.ibb.co/Qp1SXBw/commerce.png" alt="Mesh agro" height="25px" className={classes.image} />
                        Mesh Agro
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart /></Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
