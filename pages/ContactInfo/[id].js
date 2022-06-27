import { useRouter} from "next/router";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";




const Update = ({user}) => {
  const router=useRouter()
  const {name,email,message,_id}=user


  const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
   reset();
    //console.log("inserted data is", data);
    axios.put(`http://localhost:5000/contact/${_id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        alert("data updated ")
        router.push('/ContactInfo')
      }
    }); 
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ mt: "100px" }}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: "center", mb: "16px" }}>
                Update your Information
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ ml: "16px" }} variant="body1">
                  Name .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  required
                  defaultValue={name} 
                  {...register("name")}
                />

                <Typography sx={{ ml: "16px" }} variant="body1">
                  Email .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  required
              defaultValue={email} 
                  {...register("email")}
                />

                <Typography sx={{ ml: "16px" }} variant="body1">
                  Message .
                </Typography>
                <TextField
                  sx={{ width: { md: "90%", xs: "100%" }, m: 1 }}
                  required
                 defaultValue={message} 
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
                    Update
                  </Button>
            
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Update;


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res= await fetch('http://localhost:5000/contact')
  const users=await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user._id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/contact/${params.id}`)
  const user = await res.json()

  // Pass post data to the page via props
  return {   props: {
      user,
    },  }
}



