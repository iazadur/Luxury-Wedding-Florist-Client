import { Container, Grid, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import React from 'react';
import FooterTitle from './FooterTitle'
import { makeStyles } from '@mui/styles';

import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#2C3E50',
        color: "#9AA7AF",
        fontSize: "12px !important",
        marginTop: 100,
        textAlign: "left !important",
        padding: "30px 0"
    },
    logo: {
        color: "#fff",
        fontSize: "36px !important",
        fontFamily: "Roboto",
        fontWeight: "600",

    },
    logoSpan: {
        fontSize: "36px !important",
        color: "#F1C40F"
    },
    list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start !important",
        padding: 0
    },
    IconStyle: {
        color: "#fff",
        background: "#00ADEF",
        fontSize: "16px",
        padding: "6px",
        borderRadius: 5,
        '&:hover': {
            background: '#fff !important',
            color: '#00ADEF !important',
        }
    }
});


const Footer = () => {
    const { root, logo, logoSpan, list, IconStyle, IconListStyle } = useStyles()
    return (
        <>
            <div className={root}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Fade left>
                            <Typography className={logo} variant="h3">TRE<span className={logoSpan}>ND</span></Typography>
                            <Typography variant="body2" sx={{ my: 3 }}>Powerful WP Theme, built to suit everybody and any type of website</Typography>
                            <Typography variant="body2">TREND Theme has everything you need to build an awesome website for you or your company and the possiblities are just endless</Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Fade bottom>
                            <FooterTitle text={"Menu"} />
                            <ListItem className={list}>
                                <ListItemText primary="Home" />
                                <ListItemText primary="Shop" />
                                <ListItemText primary="Checkout" />
                                <ListItemText primary="Blog" />
                                <ListItemText primary="Features" />
                                <ListItemText primary="Wishlist" />
                            </ListItem>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Fade bottom>
                            <FooterTitle text={"Account"} />
                            <ListItem className={list}>
                                <ListItemText primary="My Account" />
                                <ListItemText primary="Wishlist" />
                                <ListItemText primary="Blog" />
                                <ListItemText primary="Checkout" />
                                <ListItemText primary="Features" />
                            </ListItem>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={3} >
                        <Fade right>
                            <Box className={list}>
                                <FooterTitle text={"Social icons"} />
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemIcon>
                                        <HomeIcon sx={{ color: "#9AA7AF" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="No 123, Rode Island, USA" />

                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemIcon>
                                        <CallIcon sx={{ color: "#9AA7AF" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="(+88) 01991666031" />

                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemIcon>
                                        <EmailIcon sx={{ color: "#9AA7AF" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Email: iamazadur@gmail.com" />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <a href="https://www.facebook.com/iazadur" target="_blank" rel="noopener noreferrer">
                                        <ListItemIcon className={IconListStyle}>
                                            <FacebookIcon className={IconStyle} />
                                        </ListItemIcon>
                                    </a>
                                    <a href="https://www.instagram.com/iazadur" target="_blank" rel="noopener noreferrer">
                                        <ListItemIcon>
                                            <InstagramIcon className={IconStyle} />
                                        </ListItemIcon>
                                    </a>
                                    <a href="https://www.linkedin.com/in/iamazadur" target="_blank" rel="noopener noreferrer">
                                        <ListItemIcon>
                                            <LinkedInIcon className={IconStyle} />
                                        </ListItemIcon>
                                    </a>

                                    <a href="https://github.com/iazadur" target="_blank" rel="noopener noreferrer">
                                    <ListItemIcon>
                                        <GitHubIcon className={IconStyle} />
                                    </ListItemIcon>
                                </a>

                            </ListItem>
                        </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    );
};

export default Footer;