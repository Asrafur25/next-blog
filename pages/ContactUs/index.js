import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import SharedComponent from "../../Components/SharedComponent";
import axios from "axios";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("inserted data is", data);

    axios.post("http://localhost:5000/contact", data).then((res) => {
        if (res.data.insertedId) {
         alert("successfully updated")
        }
      }); 
    reset();
  };
  return (
    <>
      {/* second portion start here */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} sx={{ mt: "100px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingRight: "32px",
              }}
            >
              <Typography variant="h4">Contact Me</Typography>
              <Box
                sx={{
                  borderBottom: "2px solid #DFC6B0",
                  width: { xs: "100px", md: "100px" },
                  mt: "10px",
                  ml: "320px",
                  mb: "16px",
                }}
              ></Box>
              <Typography sx={{ mb: "16px", color: "gray" }} variant="body2">
                
                LETS GET INTOUCH
              </Typography>
            </Box>

            <Typography sx={{ mb: "48px", fontSize: "14px" }}>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus
              nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
              felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla
              fringilla purus Lorem ipsum dosectetur adipisicing elit at leo
              dignissim congue. Mauris elementum accumsan leo vel tempor.
              <br /> Aliquam et elit eu nunc rhoncus viverra quis at felis et
              netus et malesuada fames ac turpis egestas. Aenean commodo ligula
              eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes
            </Typography>

            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ ml: "16px" }} variant="body1">
                  Name .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  required
                  {...register("name")}
                />
                <Typography sx={{ ml: "16px" }} variant="body1">
                  Email .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  type="email"
                  required
                  {...register("email")}
                />
                <Typography sx={{ ml: "16px" }} variant="body1">
                  Message .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  multiline
                  maxRows={4}
                  required
                  {...register("message")}
                />
                <Button
                  sx={{
                    width: { md: "20%", xs: "50%" },
                    ml: "8px",
                    mt: "8px",
                    backgroundColor: "#888888",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit Form
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <SharedComponent />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUs;
