import { Grid, Link, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Title from '../../../Shared/Title/Title';

const MyOrders = () => {
    const {user} = useAuth()
    const [order, setMyOrders] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${user.email}`)
        .then(res=>{
            setMyOrders(res.data)
            console.log(res.data);
        })
    },[user.email])
    return (
        <>
            <Grid container>
            <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <React.Fragment>
      <Title>My Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.firstName+" "+row.lastName}</TableCell>
              <TableCell>{row.city+" "+row.zip}</TableCell>
              
              <TableCell align="right">${`${row.ammount}`}</TableCell>
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

export default MyOrders;