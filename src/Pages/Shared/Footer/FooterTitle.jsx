import { Typography } from '@mui/material';
import React from 'react';

const FooterTitle = ({text}) => {
    return (
        <>
            <Typography variant="h3" color="#D5E9F8" sx={{fontSize:"24px",margin:"20px 0px 5px",fontFamily:"Roboto"}}>{text}</Typography>
        </>
    );
};

export default FooterTitle;