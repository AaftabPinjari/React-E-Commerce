import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './myTextField';


const AddressForm = () => {
    const methods = useForm();


    return (
        <>
            <Typography variant="h6" gutterBottom>Shippring Address</Typography>
            <FormProvider {...methods}>
                <Grid container spacing={3}>
                    <FormInput />

                </Grid>
            </FormProvider>
        </>
    )
}

export default AddressForm
