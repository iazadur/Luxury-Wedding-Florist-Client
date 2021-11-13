import React from 'react';
import { Paper, Grid, Link, Table, TableBody, TableCell, TableHead, TableRow, Avatar } from '@mui/material';
import Title from '../../../Shared/Title/Title';
import DeleteIcon from '@mui/icons-material/Delete';


const AllReview = ({ review, handleDelete }) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <React.Fragment>
                            <Title>Your FeedBack</Title>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Avatar</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Rating</TableCell>
                                        <TableCell>Feedback</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {review.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell><Avatar src={row.img}></Avatar> </TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.rating}</TableCell>
                                            <TableCell>{row.feedback.slice(0, 20)}</TableCell>
                                            <TableCell>
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
        </>
    );
};

export default AllReview;