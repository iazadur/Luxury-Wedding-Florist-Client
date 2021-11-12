import { Typography, TextField } from '@mui/material';
import React from 'react';
import MuiButton from '../../../../StyleComponents/MuiButton';
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{
        data.date = new Date().toDateString()

        axios.post('http://localhost:5000/products',data)
        .then(res=>{
            reset()
            Swal.fire({
                icon: 'success',
                title: 'Product Added Successfully!',
                showConfirmButton: false,
                timer: 1500
              })

        })
    }

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Add A Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
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