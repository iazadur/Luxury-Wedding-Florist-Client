import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiButton from '../../StyleComponents/MuiButton';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddressForm = ({ product }) => {
const {user} = useAuth()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const order = {...data }
    order.date = new Date().toLocaleDateString()
    order.productName = product.title
    order.ammount = product.price
    order.productID = product._id
    order.productUrl = product.imgUrl
    order.email = user.email
    order.status = "pending"
    axios.post('http://localhost:5000/order', order)
      .then(res => {
        reset()
        Swal.fire({
          icon: 'success',
          title: 'You Have A Order Successfully!',
          showConfirmButton: false,
          timer: 1500
        })

      })
    console.log(order);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid component='form' onSubmit={handleSubmit(onSubmit)} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("firstName", { required: true })}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("lastName", { required: true })}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        {errors.exampleRequired && <span>This field is required</span>}
        <Grid item xs={12}>
          <TextField
            {...register("address1", { required: true })}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("address2")}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("city", { required: true })}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("state", { required: true })}
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("zip", { required: true })}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("country", { required: true })}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12} >
          <MuiButton type="submit">Proceed to Pay</MuiButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm