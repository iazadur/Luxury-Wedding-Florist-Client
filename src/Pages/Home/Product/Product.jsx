import { Container, Grid, Rating } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import sunGlass from './../../../Asserts/sunglasses.jpg'



// green #28C8A4
// red #FB552F
// yellow #FFB42E
const Product = () => {
    return (
        <>
            <div>

                <Container sx={{ mt: 15 }}>
                    <Grid container spacing={2}>
                        {
                            Array.from({ length: 6 }).map((a, idx) => (
                                <Grid xs={12} md={4} item>

                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            width="100%"
                                            image={sunGlass}
                                            alt="green iguana"

                                        />
                                        <CardContent sx={{ bgcolor: "#ECF0F1", p: 3 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                            <Rating name="half-rating-read" precision={3} readOnly />
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center", background: 'linear-gradient(120deg, #FF8CAB ,#7366FF)', }}>

                                            <Button size="small" sx={{ color: "#fff" }}>Buy Now</Button>
                                        </CardActions>
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