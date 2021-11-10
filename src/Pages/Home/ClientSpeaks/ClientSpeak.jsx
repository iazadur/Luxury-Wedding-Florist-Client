import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Rating } from '@mui/material';



const ClientSpeak = ({ username, img, review, rating }) => {



    return (
        <>
            <Container sx={{ justifyContent: "center", display: 'flex', mb: 2 }}>
                <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: "column", alignItems: "center" }}>
                    <Avatar src={img} />
                    <Typography variant={"subtitle1"}>{username}</Typography>


                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Rating name="read-only" value={rating} readOnly />

                    </CardActions>
                </Card>
            </Container>
        </>
    );
};

export default ClientSpeak;