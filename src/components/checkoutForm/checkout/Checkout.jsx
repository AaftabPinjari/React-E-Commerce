import React, { useState } from 'react'
import useStyles from './styles'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const classes = useStyles();


    const Form = () => {
        return activeStep === 0 ? <AddressForm /> : <PaymentForm />

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
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
