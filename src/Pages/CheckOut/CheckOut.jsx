import { Card, CardContent, CardMedia, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import AddressForm from './AddressForm';

const CheckOut = () => {
    // const [order, setOrder] = useState({})
    const [product, setProduct] = useState([])

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [id])

    console.log(product);
    //     const handleBlur = (e) => {
    //         const field = e.target.name
    //         const value = e.target.value
    //         const newLoginData = { ...order }
    //         newLoginData[field] = value
    //         setOrder(newLoginData)
    //     }
    // console.log(order);
    //     const handlePayment = (e) => {
    //         console.log("payment");

    //         e.preventDefault()
    //     }
    return (
        <>
            <Navigation />


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
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.desc}
                                    </Typography>
                                    <Typography sx={{ my: 2 }} variant="h4">${product.price}</Typography>
                                    <Rating name="read-only" value={3} readOnly />
                                </CardContent>

                            </Card>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <AddressForm product={product} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>



            <Footer />
        </>
    );
};

export default CheckOut;