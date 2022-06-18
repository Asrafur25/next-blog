import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const index = ({ data }) => {
  return (
    <Grid item xs={12} md={4} >
      <Box sx={{mt:"96px",pl:"32px"}}>

      <Card sx={{ maxWidth: 400, marginBottom: "40px" }}>
        <CardMedia
          component="img"
          height="200"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="#be9656"
            sx={{ textAlign: "center" }}
          >
            {data.title}
          </Typography>
          <Typography variant="h5" color="black" sx={{ textAlign: "center" }}>
            <b>{data.name}</b>
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid #DBA556",
              width: "70px",
              ml: "150px",
              mt: "10px",
            }}
          ></Box>
          <Typography
              variant="body2"
              color="gray"
              sx={{textAlign:"center",mt:"16px",mb:"16px"}}
           
            >
              {data.date}
            </Typography>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
          
            <Typography
              variant="body2"
              color="black"
           
            >
              {data.detail}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      </Box>
     
    </Grid>
  );
};

export default index;
