import { Container, Grid, Rating, Box, Card, Typography, Button, CardMedia, CardContent, CardActions } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../../Shared/Title/Title';
import Fade from 'react-reveal/Fade';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;




// green #28C8A4
// red #FB552F
// yellow #FFB42E
const Product = ({ products }) => {


    return (
        <>
            {products.length === 0 ? (<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", height: "100vh" }} >
                <DotLoader color="#E317E3" css={override} size={50} />
            </Box>) : (<div>
                <Title>Latest Products </Title>

                <Box sx={{ height: "2px", bgcolor: "#FF8CAB", width: "100px", m: "0 auto" }}></Box>
                <Container sx={{ my: 15 }}>

                    <Grid container spacing={2}>
                        {
                            products.slice(0, 6).map((p) => (
                                <Grid key={p._id} xs={12} md={4} item>
                                    <Fade bottom>

                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                width="100%"
                                                image={p.imgUrl}
                                                alt="green iguana"

                                            />
                                            <CardContent sx={{ bgcolor: "#ECF0F1", p: 3 }}>
                                                <Typography gutterBottom variant="h5" sx={{ minHeight: "70px" }} component="div">
                                                    {p.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {p.desc}
                                                </Typography>
                                                <Typography sx={{ my: 2 }} variant="h4">${p.price}</Typography>
                                                <Rating name="read-only" value={p.rating} readOnly />
                                            </CardContent>
                                            <NavLink to={`/checkout/${p._id}`} className="textDecoration">
                                                <CardActions sx={{ justifyContent: "center", background: 'linear-gradient(120deg, #FF8CAB ,#7366FF)', }}>

                                                    <Button size="small" sx={{ color: "#fff" }} >Buy Now</Button>
                                                </CardActions>
                                            </NavLink>
                                        </Card>


                                    </Fade>
                                </Grid>
                            ))}
                    </Grid>
                </Container>

            </div>)}

        </>
    );
};

export default Product;

// https://i.ibb.co/ZVRg61k/4.jpg
// https://i.ibb.co/FHGbLh5/5.jpg
// https://i.ibb.co/8jwqfJJ/6.jpg
// https://i.ibb.co/ggFrDbS/7.jpg