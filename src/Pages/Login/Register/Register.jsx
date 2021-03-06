import React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import MuiButton from '../../../StyleComponents/MuiButton';



const theme = createTheme();

export default function Register() {

    const { registerUser, signInWithGoogle, user, authError } = useAuth()
    const history = useHistory()
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // eslint-disable-next-line no-console
        const firstName = data.get('firstName')
        const lastName = data.get('lastName')
        const name = firstName + " " + lastName

        if (data.get('password') !== data.get('password1')) {
            return alert("Your password didn't match")
        }
        registerUser(data.get('email'), data.get('password1'), name, history)


    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    if (user?.email) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User Created Successfully!',
            showConfirmButton: false,
            timer: 5000
        });
    }

    if (authError) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${authError}`,
            showConfirmButton: false,
            timer: 4000
        });
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password1"
                                    label="Confirm Password"
                                    type="password"
                                    id="password1"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/login">
                                    <Link variant="body2">
                                        {" Already have an account? Sign in"}
                                    </Link>
                                </NavLink>

                            </Grid>
                        </Grid>


                    </Box>

                    <MuiButton onClick={handleGoogleSignIn} sx={{ width: "100%", mt: 1, py: 1 }} variant="contained">Google Sign In</MuiButton>
                </Box>
            </Container>
        </ThemeProvider>
    );
}