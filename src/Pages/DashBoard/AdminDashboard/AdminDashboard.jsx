import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';

import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';

const AdminDashboard = () => {
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
        axios.get('https://boiling-temple-62751.herokuapp.com/orders')
            .then(res => {
                setOrders(res.data)
            })
    }, [])
    // https://boiling-temple-62751.herokuapp.com/
    return (
        <>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits orders={orders} />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders orders={orders} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default AdminDashboard;