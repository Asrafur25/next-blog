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
import AboutImage2 from "../../../image/img5.jpg";
import signatureImg from "../../../image/signature.png";

const index = () => {
  return (
    <Container spacing={5}>
      <Grid
        container
        spacing={5}
        sx={{ diplay: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12} md={8} >
          <Box sx={{ mt: "100px" }}>
            <Image src={AboutImage} alt="about image" />
          </Box>


          
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mt: "100px",
              backgroundColor: "#F2F2F2",
              p: "30px",
            }}
          >
            <Box
              sx={{
                borderBottom: "2px solid black",
                width: "300px",
                mb: "10px",
              }}
            ></Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="text">ABOUT ME </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "2px solid black",
                width: "300px",
                mt: "10px",
              }}
            ></Box>
            <Box sx={{mt:"40px"}}>
            <Image
              src={AboutImage2}
              alt="about image 1"
            
            />
            </Box>
            
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                justifyContent: "left",
                width: "320px",
                mt: "20px",
              }}
            >
              <Typography>
                Aliquam et elit eu nunc rhoncus viverra
                <br /> quis at felis et netus et malesuada fames <br />
                ac turpis egestas. Aenean commodo
                <br /> ligula eget dolor.
              </Typography>
            </Box>
            <Box sx={{ mt: "20px" }}>
              <Image src={signatureImg} alt="signature image" />
            </Box>

            {/* subscrbie */}
            <Box sx={{ mt: "20px" }}>
              <Box
                sx={{
                  borderBottom: "2px solid black",
                  width: "300px",
                  mb: "10px",
                }}
              ></Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="text">subscrbie </Typography>
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid black",
                  width: "300px",
                  mt: "10px",
                }}
              ></Box>

              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Your email address"
                style={{ width:"300px",marginTop:"20px", lineHeight: 2 }}
              />

              <Button
                variant="text"
                sx={{
                  mt: "10px",
                  width: 150,
                  backgroundColor: "#888888",
                  color: "white",
                }}
              >
                subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
