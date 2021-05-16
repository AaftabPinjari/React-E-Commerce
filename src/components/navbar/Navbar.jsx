import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'


const Navbar = ({ totalItems }) => {
    const location = useLocation()
    const classes = useStyles();


    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h4" className={classes.title} color="inherit">
                        <img src="https://i.ibb.co/Qp1SXBw/commerce.png" alt="Mesh agro" height="25px" className={classes.image} />
                        Mesh Agro
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (<div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart /></Badge>
                        </IconButton>
                    </div>)}

                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
