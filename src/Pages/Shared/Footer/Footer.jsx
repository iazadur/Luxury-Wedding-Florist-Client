import { Container, Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
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

const useStyles = makeStyles({
    root: {
        backgroundColor: '#2C3E50',
        color: "#9AA7AF",
        fontSize: "14px",
        marginTop: 100,
        textAlign: "left",
        padding: "30px 0"
    },
    logo: {
        color: "#fff",
        fontSize: "36px",
        fontFamily: "Roboto",
        fontWeight: "600",

    },
    logoSpan: {
        fontSize: "36px",
        color: "#F1C40F"
    },
    list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0
    },
   
    IconStyle:{
        color:"#fff",
        background:"#00ADEF",
        fontSize:"16px",
        padding:"6px",
        borderRadius:2,
        '&:hover': {
            background: '#fff !important',
            color: '#00ADEF !important',
            trans
        }
    }
});


const Footer = () => {
    const { root, logo, logoSpan, list,IconStyle,IconListStyle } = useStyles()
    return (
        <>
            <div className={root}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography className={logo} variant="h1">TRE<span className={logoSpan}>ND</span></Typography>
                            <Typography variant="body2" sx={{ my: 3 }}>Powerful WP Theme, built to suit everybody and any type of website</Typography>
                            <Typography variant="body2">TREND Theme has everything you need to build an awesome website for you or your company and the possiblities are just endless</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FooterTitle text={"Menu"} />
                            <ListItem className={list}>
                                <ListItemText primary="Home" />
                                <ListItemText primary="Shop" />
                                <ListItemText primary="Checkout" />
                                <ListItemText primary="Blog" />
                                <ListItemText primary="Features" />
                                <ListItemText primary="Wishlist" />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FooterTitle text={"Account"} />
                            <ListItem className={list}>
                                <ListItemText primary="My Account" />
                                <ListItemText primary="Wishlist" />
                                <ListItemText primary="Blog" />
                                <ListItemText primary="Checkout" />
                                <ListItemText primary="Features" />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FooterTitle text={"Menu"} />
                            <ListItem>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />

                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CallIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />

                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={IconListStyle}>
                                    <FacebookIcon className={IconStyle}  />
                                </ListItemIcon>
                                <ListItemIcon>
                                    <InstagramIcon  className={IconStyle} />
                                </ListItemIcon>
                                <ListItemIcon>
                                    <LinkedInIcon  className={IconStyle} />
                                </ListItemIcon>
                                <ListItemIcon>
                                    <GitHubIcon  className={IconStyle} />
                                </ListItemIcon>
                                
                            </ListItem>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Footer;