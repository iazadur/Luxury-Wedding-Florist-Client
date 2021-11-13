import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material'
import errorPage from '../../Asserts/notfoundpage.png'
import MuiButton from '../../StyleComponents/MuiButton';

const NotFound = () => {
    return (
        <>
            <Container>
                <img src={errorPage} alt="" width="100%"/>
                <NavLink to="/" className="textDecoration" >
                    <MuiButton>Back To Home Page</MuiButton>
                </NavLink>
            </Container>
        </>
    );
};

export default NotFound;