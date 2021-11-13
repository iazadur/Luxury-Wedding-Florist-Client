import { Typography, TextField, Alert } from '@mui/material';
import React from 'react';
import MuiButton from '../../../../StyleComponents/MuiButton';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const AddProduct = () => {
    const { setError, error } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.date = new Date().toLocaleDateString()
        if (data.rating <= 5 && data.rating > 0) {
            axios.post('https://boiling-temple-62751.herokuapp.com/products', data)
                .then(res => {
                    reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Added Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })

                })
        } else {
            return setError("Please give rating up to 1 to 5 !")
        }



    }

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Add A Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <Alert autoCapitalize severity="warning">{error}</Alert>}
                <TextField sx={{ width: 1, m: 1 }} label="Title" variant="standard" {...register("title")}></TextField>

                <TextField sx={{ width: 1, m: 1 }} label="Description" variant="standard" {...register("desc")}></TextField>

                <TextField sx={{ width: 1, m: 1 }} label="Price" type="number" variant="standard" {...register("price")}></TextField>

                <TextField sx={{ width: 1, m: 1 }} label="Rating" type="number" variant="standard" {...register("rating")}></TextField>
                <TextField sx={{ width: 1, m: 1 }} label="Image Url" variant="standard" {...register("imgUrl")}></TextField>

                <MuiButton type="submit" style={{ margin: "10px auto" }}>Submit</MuiButton>

            </form>


        </div>
    );
};

export default AddProduct;