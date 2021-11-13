import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Rating } from '@mui/material';


const ClientSpeak = ({ name, img, feedback, rating }) => {



    return (
        <>
        
            <Container sx={{ justifyContent: "center", display: 'flex',my:10 }}>
                <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: "column", alignItems: "center" }}>
                    <Avatar src={img} />
                    <Typography variant={"subtitle1"}>{name}</Typography>


                    <CardContent>
                        <Typography sx={{ bgcolor: "#ECF0F1", p: 1, borderRadius: 3 }} variant="body2" color="text.secondary">
                            {feedback}
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