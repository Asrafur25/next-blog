import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutImage from "../../image/img4.jpg";
import AboutImage2 from "../../image/img5.jpg";
import signatureImg from "../../image/signature.png";

const SharedComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: "100px",
          backgroundColor: "#F2F2F2",
          p: { xs: "10px", md: "30px" },
        }}
      >
        <Box
          sx={{
            borderBottom: "2px solid black",
            width: { xs: "270px", md: "300px" },
            mb: "10px",
          }}
        ></Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="text">ABOUT ME </Typography>
        </Box>
        <Box
          sx={{
            borderBottom: "2px solid black",
            width: { xs: "270px", md: "300px" },
            mt: "10px",
          }}
        ></Box>
        <Box sx={{ mt: "40px" }}>
          <Image src={AboutImage2} alt="about image 1" />
        </Box>

        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "left",
            width: { xs: "270px", md: "320px" },
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
              width: { xs: "270px", md: "300px" },
              mb: "10px",
            }}
          ></Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="text">subscrbie </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: "2px solid black",
              width: { xs: "270px", md: "300px" },
              mt: "10px",
            }}
          ></Box>

          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Your email address"
            style={{
              width: { xs: "270px", md: "300px" },
              marginTop: "20px",
              lineHeight: 2,
            }}
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
    </>
  );
};

export default SharedComponent;
