import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";



const index = () => {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography color="#F7CF7C">ART / LIFESTYLE</Typography>
            <Typography variant="h4" sx={{ mt: "10px" }}>
              <b>Beauty Of Nature</b>
            </Typography>
            <Box
              sx={{
                borderBottom: "1px solid black",
                width: "70px",
                ml: "350px",
                mt: "10px",
              }}
            ></Box>
            <Typography color="#DEB99F" sx={{ mt: "10px" }}>
              Posted On July 22, 2015
            </Typography>
            <Typography variant="text" sx={{ mt: "15px" }} whiteSpace="5px">
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. …
            </Typography>
            <Box
              sx={{
                borderBottom: "1px solid black",
                width: "70px",
                ml: "350px",
                mt: "20px",
              }}
            ></Box>
            <Typography variant="h6" sx={{ mt: "10px" }}>
              <b>Continue Reading</b>
            
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>

      
    </Container>
  );
};

export default index;



