import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Bg1 from '../../../Asserts/1.jpg'
import Bg2 from '../../../Asserts/2.jpg'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    bg1: {
        background: `url(${Bg1}) no-repeat center`,
        color: "#fff",
        padding: 100,


    },
    bg2: {
        background: `url('${Bg2}') no-repeat center`,
        color: "#fff",
        padding: 100,


    },
    readMore: {
        marginTop: "200px !important",
        minWidth: "150px",
        border: "2px solid #000",
        transition: 'border 1s linear',
        fontWeight: 500,
        cursor: "pointer",
        '&:hover': {
            color: '#00ADEF !important',
            border: "2px solid #00ADEF",

        }
    }
})


// backgroundColor: 'rgba(66,74,93)',
// backgroundBlendMode: 'darken, luminosity'

const SaleBannerHolder = () => {
    const { bg1, bg2, readMore } = useStyles()
    return (
        <>
            <Container sx={{ my: 10 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} >
                        <Box className={bg1}> <Typography variant="h6" className={readMore}>Read More</Typography></Box>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Box className={bg2}> <Typography variant="h6" className={readMore}>Read More</Typography></Box>

                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default SaleBannerHolder;