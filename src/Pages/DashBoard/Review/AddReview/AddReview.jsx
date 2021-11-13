import React from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Grid, Paper, Alert } from '@mui/material';
import MuiButton from '../../../../StyleComponents/MuiButton'
import Title from '../../../Shared/Title/Title';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';



const AddReview = ({ setLoad, load }) => {
    const { user, error } = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.date = new Date().toDateString()
        data.name = user.displayName
        data.img = user.photoURL



        axios.post('https://boiling-temple-62751.herokuapp.com/review', data)
            .then(res => {
                setLoad(!load)
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
            })
    }

    return (
        <>
            <Grid container Spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Give Your FeedBack</Title>
                        <Grid component="form" onSubmit={handleSubmit(onSubmit)} container spacing={3}>
                            {error && <Alert severity="error">{error}</Alert>}
                            <Grid item xs={12}>
                                <TextField
                                    {...register("feedback", { required: true })}
                                    fullWidth
                                    label="Write A Review"
                                    multiline
                                    variant="standard"

                                />
                            </Grid>


                            <Grid item xs={12} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="demo-simple-select-filled-label">Give A Rating</InputLabel>
                                    <Select
                                        {...register("rating", { required: true })}
                                    >

                                        <MenuItem value={1}>Bad</MenuItem>
                                        <MenuItem value={2}>Poor</MenuItem>
                                        <MenuItem value={3}>Avarage</MenuItem>
                                        <MenuItem value={4}>Great</MenuItem>
                                        <MenuItem value={5}>Excelent</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <MuiButton type="submit" style={{ margin: "10px auto" }}>Submit</MuiButton>



                        </Grid>

                    </Paper></Grid></Grid>

        </>
    );
};

export default AddReview;