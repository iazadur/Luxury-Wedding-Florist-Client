import { Delete, Edit } from '@mui/icons-material';
import { Avatar, Grid, Link, Paper, Table, TableBody, TableCell, TableHead, TableRow, CardHeader } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import Title from '../../../Shared/Title/Title';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(res => {
                setOrders(res.data)
            })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/orders/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {

                                const remainingorders = orders.filter(user => user._id !== id);
                                setOrders(remainingorders);
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'The Order has been deleted.',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <React.Fragment>
                            <Title>Manage Orders</Title>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Products</TableCell>

                                        <TableCell align="right">Orders Amount</TableCell>

                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map((row,id) => (
                                        <TableRow key={row._id}>
                                            <TableCell>{id}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>

                                                <CardHeader
                                                    avatar={
                                                        <Avatar src={row.productUrl} />
                                                    }
                                                    title={row.productName}
                                                    subheader={row.email.split("@")[0]}
                                                /></TableCell>

                                            <TableCell align="right">{`$${row.ammount}`}</TableCell>
                                            <TableCell>
                                                <NavLink to="/">
                                                    <Edit sx={{ color: "blue" }} />
                                                </NavLink>
                                                <Delete sx={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(row._id)} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Link color="primary" href="#" sx={{ mt: 3 }}>
                                See more orders
                            </Link>
                        </React.Fragment>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default ManageOrders;