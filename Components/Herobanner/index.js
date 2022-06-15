
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import heroImage from "../../image/heroImage.jpg"

const index = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:"80px" }}>
        <Grid container spacing={5} sx={{p:"0px"}}>
            <Grid item xs={12} md={12} >
                <Box sx={{display:"flex",justifyContent:"center",textAlign:"center", flexDirection: "column",mt:'40px'}}>

                <Typography variant="h5" sx={{fontFamily:'Jost'}}>Grand</Typography>
               <Typography variant="h2" sx={{fontFamily:'Jost',fontWeight:"bold"}}>Blog</Typography>
                </Box>
            
            </Grid>
            <Grid item xs={12} md={12}sx={{pl:"0px"}}>
                <Box sx={{zIndex:-1,position:"absolute",marginTop:"-70px"}}> <Image
                src={heroImage}
                alt="hero banner"
                /></Box>
               
            </Grid>
            </Grid>
        </Box>
    );
};

export default index;