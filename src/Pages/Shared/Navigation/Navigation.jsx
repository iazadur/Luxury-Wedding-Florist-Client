import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Container, Divider, ListItemIcon, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import MobileMenu from './MobileNav';

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileNav, setMobileNav] = useState(false)
    //handle click 
    const handleMobileNav = () => {
        setMobileNav(!mobileNav)
    }



    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="fixed">
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon onClick={handleMobileNav} />

                            </IconButton>
                            <Typography >LOGO</Typography>
                        </Box>
                        <Box xs={{display:{xs:"none",md:"block"}}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Typography sx={{ minWidth: 100 }}>Home</Typography>
                            <Typography sx={{ minWidth: 100 }}>Service</Typography>
                            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                        </Box>
                        </Box>
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        </Typography> */}

                        
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography sx={{ minWidth: 100 }}>Login</Typography>
                                <Tooltip title="Account settings">
                                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
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
                                <MenuItem>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        

                    </Toolbar>
                </Container>
            </AppBar>
            {mobileNav && <MobileMenu />}
        </Box>
    );
}
