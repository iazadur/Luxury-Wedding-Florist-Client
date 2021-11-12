import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bg1 from './../../../Asserts/1.jpg'

const appoinmentBg = {
    background: `url(${bg1})`,
    marginTop: 100,
    marginBottom: 100,
    color: "#fff",
    padding:150,

}
// backgroundColor: 'rgba(66,74,93)',
// backgroundBlendMode: 'darken, luminosity'

const SaleBannerHolder = () => {
    return (
        <>
            <Container sx={{ my: 10 }}>
                <Grid container spacing={6} >
                    <Grid item xs={12} sm={6} >
                        <Typography style={appoinmentBg}>hellow</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Typography style={appoinmentBg}>hellow</Typography>

                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default SaleBannerHolder;