import { Avatar, Grid, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import Title from '../../../Shared/Title/Title';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://boiling-temple-62751.herokuapp.com/products')
            .then(res => {
                setProducts(res.data)
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
                    axios.delete(`https://boiling-temple-62751.herokuapp.com/products/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {

                                const remainingProducts = products.filter(user => user._id !== id);
                                setProducts(remainingProducts);
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'Your file has been deleted.',
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
            {products.length === 0 ? (
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", height: "100vh" }} >
                    <DotLoader color="#E317E3" css={override} size={50} />
                </Box>
            ) : (
                <Grid container>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <React.Fragment>
                                <Title>Manage Products</Title>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Desc</TableCell>

                                            <TableCell align="right">Sale Amount</TableCell>

                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products.map((row) => (
                                            <TableRow key={row._id}>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.title}</TableCell>
                                                <TableCell><Avatar src={row.imgUrl}></Avatar></TableCell>

                                                <TableCell align="right">{`$${row.price}`}</TableCell>
                                                <TableCell>
                                                    <NavLink to={`/updateProduct/${row._id}`}>
                                                        <EditIcon sx={{ color: "blue" }} />
                                                    </NavLink>
                                                    <DeleteIcon sx={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(row._id)} />
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
            )}


        </>
    );
};

export default ManageProducts;

