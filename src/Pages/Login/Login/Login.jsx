import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import Swal from 'sweetalert2';
import MuiButton from '../../../StyleComponents/MuiButton';

const override = css`
  display: block;
  margin: 0 auto;
`;




const theme = createTheme();

export default function Login() {
  const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth()
  const location = useLocation();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    loginUser(data.get('email'), data.get('password'), location, history)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }

  if (user?.email) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User Login Successfully!',
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
   <>
   {isLoading ? (<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", height: "100vh" }} >
                <DotLoader color="#E317E3" css={override} size={50} />
            </Box>):(
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
                     Sign in
                   </Typography>
                   <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                     <TextField
                       margin="normal"
                       required
                       fullWidth
                       id="email"
                       label="Email Address"
                       name="email"
                       autoComplete="email"
                       autoFocus
                     />
                     <TextField
                       margin="normal"
                       required
                       fullWidth
                       name="password"
                       label="Password"
                       type="password"
                       id="password"
                       autoComplete="current-password"
                     />
                     <FormControlLabel
                       control={<Checkbox value="remember" color="primary" />}
                       label="Remember me"
                     />
                     <Button
                       type="submit"
                       fullWidth
                       variant="contained"
                       sx={{ mt: 3, mb: 2 }}
                     >
                       Sign In
                     </Button>
                     <Grid container justifyContent="space-between">
                       <Grid item>
                         <Link href="#" variant="body2">
                           Forgot password?
                         </Link>
                       </Grid>
                       <Grid item>
                         <NavLink to="/register">
                           <Link to="/" variant="body2">
                             {"Don't have an account? Sign Up"}
                           </Link>
                         </NavLink>
                       </Grid>
                     </Grid>
                    
                     
                   </Box>
                 </Box>
                 <MuiButton onClick={handleGoogleSignIn} sx={{ width: "100%", mt: 1,py:1 }} variant="contained">Google Sign In</MuiButton>
               </Container>
             </ThemeProvider>
            )}
   </>
  );
}