import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import AboutImage from '../../../image/img4.jpg'

const index = () => {
    return (
        <Container spacing={3} >
        <Grid container >
          <Grid item xs={12} md={9}>
            <Box sx={{mt:"100px"}}>
                <Image src={AboutImage}
                alt="about image"
                />
            </Box>
            </Grid>
            </Grid>
            </Container>
            
    
    );
};

export default index;