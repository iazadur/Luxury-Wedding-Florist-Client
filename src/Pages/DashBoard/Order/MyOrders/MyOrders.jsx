import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Orders from '../../Orders';

const MyOrders = () => {
    return (
        <>
            <Typography>this is my orders page</Typography>
<br /><br />
            <Grid container>
            <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default MyOrders;