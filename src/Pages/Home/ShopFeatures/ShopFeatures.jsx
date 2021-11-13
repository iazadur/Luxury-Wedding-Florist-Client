import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './ShopFeatures.css'

const ShopFeatures = () => {

    return (
        <>
            <Box style={{ backgroundColor: "#393939", color: "#FFF"}} my={12}>
                <Container>
                    <Grid container columnSpacing={3}>
                        <Grid xs={12} sm={4} item>
                            <Grid container columnSpacing={3} sx={{ display: "flex", py: 4 }}>
                                <Grid item xs={3}>
                                    <LocalShippingIcon sx={{ fontSize: "4rem" }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography sx={{ fontWeight: 600 }} variant="h6" align="left">HOME DELIVERY</Typography>
                                    <Typography variant="caption" display="block" className="captionitem" gutterBottom>We deliver right to your doorstep</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <Grid container columnSpacing={3} sx={{ display: "flex", py: 4 }}>
                                <Grid item xs={3}>
                                    <CardGiftcardIcon sx={{ fontSize: "4rem" }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography sx={{ fontWeight: 600 }} variant="h6" align="left">BUY ONE GET 2</Typography>
                                    <Typography variant="caption" display="block" className="captionitem" gutterBottom>We offer only the best deals.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <Grid container columnSpacing={3} sx={{ display: "flex", py: 4 }}>
                                <Grid item xs={3}>
                                    <ShowChartIcon sx={{ fontSize: "4rem" }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography sx={{ fontWeight: 600 }} variant="h6" align="left">HUGE DISCOUNTS</Typography>
                                    <Typography variant="caption" display="block" className="captionitem" gutterBottom>We offer only the best deals.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ShopFeatures;