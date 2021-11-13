import { Button, Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (

        <>
            <Navigation />
            {products.length === 0 ? (<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", height: "100vh" }} >
                <DotLoader color="#E317E3" css={override} size={50} />
            </Box>
            ) : (
            <Container sx={{ my: 15 }}>

                <Grid container spacing={1}>
                    {
                        products.map((p) => (
                            <Grid key={p._id} xs={12} md={6} item>


                                <Card>
                                    <Grid container>
                                        <Grid xs={12} sm={6} item>
                                            <CardMedia
                                                component="img"
                                                width="100%"
                                                image={p.imgUrl}
                                                alt="green iguana"

                                            />
                                            <NavLink to={`/checkout/${p._id}`} className="textDecoration">
                                                <CardActions sx={{ justifyContent: "center", background: 'linear-gradient(120deg, #FF8CAB ,#7366FF)', }}>

                                                    <Button size="small" sx={{ color: "#fff" }} >Buy Now</Button>
                                                </CardActions>
                                            </NavLink>
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <CardContent sx={{ bgcolor: "#ECF0F1", p: 3 }}>
                                                <Typography gutterBottom variant="h5" align="left" sx={{ minHeight: "74px" }} component="div">
                                                    {p.title}
                                                </Typography>
                                                <Typography variant="body2" align="left" color="text.secondary">
                                                    {p.desc}
                                                </Typography>
                                                <Typography sx={{ my: 2 }} align="left" variant="h4">${p.price}</Typography>
                                                <Rating className="captionitem" name="read-only" value={p.rating} readOnly />
                                            </CardContent>

                                        </Grid>

                                    </Grid>






                                </Card>


                            </Grid>
                        ))}
                </Grid>
            </Container>
            )}


            <Footer />

        </>
    );
};

export default Explore;