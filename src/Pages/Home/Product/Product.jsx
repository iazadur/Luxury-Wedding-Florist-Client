import { Container, Grid, Rating } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';



// green #28C8A4
// red #FB552F
// yellow #FFB42E
const Product = ({ products }) => {

    
    return (
        <>
            <div>

                <Container sx={{ my: 15 }}>
                    <Grid container spacing={2}>
                        {
                           products.slice(0,6).map((p) => (
                                <Grid key={p._id} xs={12} md={4} item>

                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            width="100%"
                                            image={p.imgUrl}
                                            alt="green iguana"

                                        />
                                        <CardContent sx={{ bgcolor: "#ECF0F1", p: 3 }}>
                                            <Typography gutterBottom variant="h5" sx={{minHeight:"70px"}} component="div">
                                                {p.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {p.desc}
                                            </Typography>
                                            <Typography sx={{ my: 2 }} variant="h4">${p.price}</Typography>
                                            <Rating name="read-only" value={p.rating} readOnly />
                                        </CardContent>
                                        <NavLink to={`/checkout/${p._id}`}>
                                            <CardActions sx={{ justifyContent: "center", background: 'linear-gradient(120deg, #FF8CAB ,#7366FF)', }}>

                                                <Button size="small" sx={{ color: "#fff", textDecoration: "none" }}>Buy Now</Button>
                                            </CardActions>
                                        </NavLink>
                                    </Card>


                                </Grid>
                            ))}
                    </Grid>
                </Container>

            </div>
        </>
    );
};

export default Product;

// https://i.ibb.co/ZVRg61k/4.jpg
// https://i.ibb.co/FHGbLh5/5.jpg
// https://i.ibb.co/8jwqfJJ/6.jpg
// https://i.ibb.co/ggFrDbS/7.jpg