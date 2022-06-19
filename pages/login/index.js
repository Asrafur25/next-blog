import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";

const index = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user, authError, googleSign } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleClick = () => {
    googleSign();
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: "160px", boxShadow: "1", p: "64px" }}>
            <Typography variant="h5">Login</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                sx={{ width: { md: "75%", xs: "100%" }, m: 1 }}
                {...register("email")}
              />

              <TextField
                id="standard-basic"
                type="password"
                label="Password"
                variant="standard"
                sx={{ width: { md: "75%", xs: "100%" }, m: 1 }}
                {...register("password")}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: { md: "75%", xs: "100%" },
                  mt: 5,
                  backgroundColor: "#F5E0BE",
                  color: "black",
                }}
              >
                Sign in
              </Button>
            </form>

            {/* Google sign in here */}
            <Button
              variant="contained"
              sx={{
                width: { md: "75%", xs: "100%" },
                mt: 5,
                backgroundColor: "#F5E0BE",
                color: "black",
              }}
              onClick={handleClick}
            >
              <GoogleIcon sx={{ mr: "16px" }} />
              Continue With Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

index.getLayout = function getLayout(page) {
  return <>{page}</>;
};
export default index;
