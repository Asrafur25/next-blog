import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign:"center",
              mt:"50px"
            }}
          >
            <Typography color="#F7CF7C">ART / LIFESTYLE</Typography>
            <Typography variant="h4" sx={{mt:"10px"}}>
              <b>City Center Bridge</b>
            </Typography>
            <Box sx={{ borderBottom: "1px solid black", width: "70px",ml:"530px", mt:"10px"}}></Box>
            <Typography variant="text" sx={{mt:"15px"}} whiteSpace="5px">
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at <br />
              leo dignissim congue. Mauris elementum accumsan leo vel tempor. …
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
