import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Container, Divider, ListItemIcon, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { makeStyles } from '@mui/styles';
import useAuth from '../../../Hooks/useAuth';
const useStyles = makeStyles({
    logo: {
        color: "#fff",
        fontSize: "16px",
        fontFamily: "Roboto",
        fontWeight: "600",

    },
    logoSpan: {
        fontSize: "16px",
        color: "#F1C40F"
    },
    textD:{
        textDecoration:"none !important",
        color:"rgba(0, 0, 0, 0.87) !important"
    }
})

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { user, logout } = useAuth()
    console.log(user);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { logo, logoSpan,textD } = useStyles()
    return (

        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="fixed" sx={{ bgcolor: "#000" }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {/* <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />

                            </IconButton> */}
                            <Typography className={logo} variant="h6body1">TRE<span className={logoSpan}>ND</span></Typography>
                        </Box>
                        <Box xs={{ display: { xs: "none", md: "block" } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography sx={{ minWidth: 100 }}>Explore</Typography>
                            </Box>
                        </Box>
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        </Typography> */}


                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {
                                !user?.email ? <NavLink sx={{ textDecoration: "none" }} to="/login">
                                    <Typography sx={{ color: "#fff" }}>Login</Typography>
                                </NavLink> :
                                    <Tooltip title="Account settings">
                                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                            <Avatar src={user.photoURL} sx={{ width: 32, height: 32 }}>M</Avatar>
                                        </IconButton>
                                    </Tooltip>
                            }

                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <NavLink to="/dashboard" className={textD} >
                                <MenuItem >
                                    <DashboardIcon sx={{color:"gray", mr:1}} /> Dashboard
                                </MenuItem>
                            </NavLink>
                            <Divider />

                            <MenuItem onClick={logout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>


                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
