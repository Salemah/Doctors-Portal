import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{mt:3}}  >

            <Card sx={{ minWidth: 275 ,boxShadow: 0  }} >
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '70px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <Typography variant="h5" component="div" color="text.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {description}
                    </Typography>


                </CardContent>

            </Card>

        </Grid>
    );
};

export default Service;