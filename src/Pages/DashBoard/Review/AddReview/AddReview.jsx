import React from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Grid, Paper } from '@mui/material';
import MuiButton from '../../../../StyleComponents/MuiButton'
import Title from '../../../Shared/Title/Title';



const AddReview = ({ handleChange, review, addReview }) => {

    return (
        <>
            <Grid container Spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2,mb:2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Give Your FeedBack</Title>
                        <Grid component="form" onSubmit={addReview} container spacing={3}>

                            <Grid item xs={12}>
                                <TextField
                                    onBlur={handleChange}
                                    name="feedback"
                                    fullWidth
                                    id="filled-textarea"
                                    label="Write A Review"
                                    multiline
                                    variant="standard"
                                    required
                                />
                            </Grid>


                            <Grid item xs={12} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="demo-simple-select-filled-label">Give A Rating</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        required
                                        name="rating"
                                        value={review.rating}
                                        onBlur={handleChange}
                                    >

                                        <MenuItem value={1}>Bad</MenuItem>
                                        <MenuItem value={2}>Poor</MenuItem>
                                        <MenuItem value={3}>Avarage</MenuItem>
                                        <MenuItem value={4}>Great</MenuItem>
                                        <MenuItem value={5}>Excelent</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <MuiButton type="submit" style={{ margin: "10px auto" }}>Submit</MuiButton>



                        </Grid>

                    </Paper></Grid></Grid>

        </>
    );
};

export default AddReview;