import {
  Box,
  Button,
  Container,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutImage from "../../../image/img4.jpg";
import SharedComponent from "../../SharedComponent";

const index = () => {
  return (
    <Container >
      <Grid
        container
        spacing={5}
        sx={{ diplay: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12} md={8}>
          <Box sx={{ mt: "100px" }}>
            <Image src={AboutImage} alt="about image" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <SharedComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
