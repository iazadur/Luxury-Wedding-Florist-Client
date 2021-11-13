import { Alert, Card, CardContent, CardMedia, Container, Grid,  Paper, Rating, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MuiButton from '../../../../StyleComponents/MuiButton';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

const UpdateProduct = () => {
    const [product, setProduct] = useState([])
    const history = useHistory()
    const { error, setError } = useAuth()
    const { register, handleSubmit, reset } = useForm({defaultValues: product });




    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/updateProduct/${id}`)
            .then(res => {
                setProduct(res.data)
                reset(res.data)
            })
    }, [id, reset])

    const onSubmit = data => {
        data.modifiedDate = new Date().toLocaleDateString()
        delete data._id;
        console.log(data);
        const url = `http://localhost:5000/updateProduct/${id}`
        axios.put(url, data).then(res => {
            console.log(res.data);
            if (res.data.modifiedCount) {
                Swal.fire({
                    icon: 'success',
                    title: 'Update Order Status Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                history.replace('/dashboard/manageProducts')
            }else{
                setError("You Can't not change Anything")
            }
        })
    }


    // const handleStatus = (e) => {
    //     if (status === '') {
    //         setError("OHH Shit You con't Select Any Status")
    //     } else {
    //         const data = { status }
    //         const url = `http://localhost:5000/updateProduct/${id}`
    //         axios.put(url, data).then(res => {
    //             console.log(res.data);
    //             if (res.data.modifiedCount) {
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'Update Order Status Successfully!',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //                 history.replace('/dashboard/manageAllOrders')
    //             }
    //         })
    //     }


    //     e.preventDefault()
    // }
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={5}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ Width: "100%" }}>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={product.imgUrl}
                                    alt="green iguana"

                                />

                                <CardContent sx={{ bgcolor: "#ECF0F1", p: 3 }}>
                                    <Typography gutterBottom variant="h5" sx={{ minHeight: "70px" }} component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.desc}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="h4">${product.price}</Typography>
                                    <Rating name="read-only" value={product.rating} readOnly />
                                </CardContent>


                            </Card>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {error && <Alert autoCapitalize severity="warning">{error}</Alert>}
                                <Typography align="left" sx={{ ml: 1, mt: 2, fontWeight: 600 }} variant="body1">Title</Typography>
                                <TextField sx={{ width: 1, m: 1 }} variant="standard" {...register("title")}></TextField>

                                <Typography align="left" sx={{ ml: 1, mt: 2, fontWeight: 600 }} variant="body1">Description</Typography>
                                <TextField sx={{ width: 1, m: 1 }} variant="standard" {...register("desc")}></TextField>

                                <Typography align="left" sx={{ ml: 1, mt: 2, fontWeight: 600 }} variant="body1">Price</Typography>
                                <TextField sx={{ width: 1, m: 1 }} type="number" variant="standard" {...register("price")}></TextField>

                                <Typography align="left" sx={{ ml: 1, mt: 2, fontWeight: 600 }} variant="body1">Rating</Typography>
                                <TextField sx={{ width: 1, m: 1 }} type="number" variant="standard" {...register("rating")}></TextField>

                                <Typography align="left" sx={{ ml: 1, mt: 2, fontWeight: 600 }} variant="body1">Image Url</Typography>
                                <TextField sx={{ width: 1, m: 1 }} variant="standard" {...register("imgUrl")}></TextField>

                                <MuiButton type="submit" style={{ margin: "10px auto" }}>Submit</MuiButton>

                            </form>
                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </>
    );
};

export default UpdateProduct;











