import { Container, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import cartImage from "../../../image/img3.jpg";

const index = () => {
  return (
    <Container sx={{ mt: "900px" }}>
      <Grid container spacing={5} sx={{ p: "0px" }}>
        <Grid item xs={12} md={6}>
          <Image src={cartImage} alt="cart image" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "left",
              backgroundColor:"#F5F5F5",
              py:"57px"
            }}
          >
            <Typography variant="h2" sx={{fontStyle:"italic",color:"#CAA8A8"}}>"hello"</Typography>
            <Typography >
              I am Kendall – photographer & <br/>Influencer. My life motto: <br/>Dance
              like there’s nobody<br/> watching love like you’ll <br/>never be hurt. Be
              who you are and say what<br/> you feel…
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
