import { Alert, Card, CardMedia, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MuiButton from '../../../../StyleComponents/MuiButton';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';


const OrderUpdate = () => {
    const [order, setOrder] = useState([])
    const [status, setStatus] = useState('');
    const history = useHistory()
    const { error, setError } = useAuth()



    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/updateOrders/${id}`)
            .then(res => {
                console.log(res.data);
                setOrder(res.data)
            })
    }, [id])

    const handleChange = (event) => {
        setStatus(event.target.value);
    }

    const handleStatus = (e) => {
        if (status === '') {
            setError("OHH Shit You con't Select Any Status")
        } else {
            const data = { status }
            const url = `http://localhost:5000/updateOrder/${id}`
            axios.put(url, data).then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Update Order Status Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.replace('/dashboard/manageAllOrders')
                }
            })
        }


        e.preventDefault()
    }
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={5}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ Width: "100%" }}>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={order.productUrl}
                                    alt="green iguana"

                                />


                            </Card>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Order summary
                                </Typography>
                                <List disablePadding>

                                    <ListItem key={"order._id"} sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary={order.productName} secondary={order.email} />
                                        <Typography variant="body2">{order.ammount}</Typography>
                                    </ListItem>


                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Total" />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                            {order.ammount}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                            Shipping
                                        </Typography>
                                        <Typography gutterBottom>{order.firstName + " " + order.lastName}</Typography>
                                        <Typography gutterBottom>{order.city + "-" + order.zip}</Typography>
                                        <Typography gutterBottom>{order.state + " " + order.country}</Typography>
                                    </Grid>
                                    <Grid item container direction="column" xs={12} sm={6}>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 2, color: "green" }}>
                                            Order Status: {status}
                                        </Typography>
                                        <Grid container>


                                            <React.Fragment>
                                                <Grid item xs={12} component="form" onSubmit={handleStatus}>
                                                    {error && <Alert severity="error">{error}</Alert>}
                                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={status}
                                                            onChange={handleChange}
                                                            label="Status"
                                                        >

                                                            <MenuItem value={"Pending"}>Pending</MenuItem>
                                                            <MenuItem value={"Processing"}>Processing</MenuItem>
                                                            <MenuItem value={"Shipped"}>Shipped</MenuItem>
                                                            <MenuItem value={"Delivered"}>Delivered</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <MuiButton type="submit">ok</MuiButton>
                                                </Grid>
                                               
                                            </React.Fragment>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </>
    );
};

export default OrderUpdate;
