import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import MuiButton from '../../../StyleComponents/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { token } = useAuth()
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    console.log(email);
    const handleAdminSubmit = (e) => {
        const user = { email }
        console.log(user);
        user.authorization = `Bearer ${token}`
        console.log(user);
        axios.put('http://localhost:5000/users/admin', user)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully Make Admin!",
                        icon: "success",
                        buttons: false,
                        timer: 1500,
                    });
                }else{
                    Swal.fire({
                        title: "Oh No!",
                        text: "Already Have Make An Admin!",
                        icon: "info",
                        buttons: false,
                        timer: 1500,
                    });
                }
            })
        e.preventDefault()
    }
    return (
        <>

            <Typography variant="h6" gutterBottom>
            Make Admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: 1, m: 1 }} id="standard-basic" label="Email" variant="standard" type="email" name="email" onBlur={handleOnBlur}></TextField>
                <MuiButton type="submit" style={{margin:"10px auto"}}>Submit</MuiButton>

            </form>



                


           

        </>
    );
};
export default MakeAdmin;