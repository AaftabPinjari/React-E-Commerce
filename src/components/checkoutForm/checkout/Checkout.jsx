import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({ cart }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingsData, setShippingData] = useState({})
    const classes = useStyles();


    /* we need to generate new token as soon as cart changes */
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log(token)
                setCheckoutToken(token)
            } catch (error) {

            }
        }
        generateToken();
    }, [cart])

    const next = (data) => {
        setShippingData(data)
    }


    const Form = () => {
        return activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />

    }
    //dummy Confirmation
    const Confirmation = () => {
        <div>Confirmation</div>
    }
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center" >Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )
                        )}
                    </Stepper>
                    {/* checkout && condition because addressform was rendering before we get the checkoutTokenId */}
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
