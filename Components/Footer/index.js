import React from "react";

import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import letsBlogImg from "../../image/letsBlog.png";
import Image from "next/image";

const index = () => {
  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          mt: "189px",
          backgroundColor: "#222222",
          color: "white",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "5rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                  <Image src={letsBlogImg} alt="lets blog" />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ color: "#959995" }}>
                    SUBSCRIPTION
                  </Typography>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Your email address"
                    style={{ width: 200,lineHeight:2 }}
                  />
                  <Button variant="text" sx={{mt:"5px", width: 200 ,backgroundColor:"#888888",color:"white"}}>
                    subscribe
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ color: "#888888" }}>
                    Rect Posts
                  </Typography>

                  <p>Emergency Dental Care</p>
                  <p>Check up</p>
                  <p>Treatment of Personal Dieases</p>
                  <p>Check up</p>
                  <p>Tooth Extraction</p>
                  <p>Check up</p>
                  <p>Check up</p>
                  <p>Check up</p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ color: "#888888" }}>
                    My Addresse
                  </Typography>

                  <p>New York-10000 hardson Yards</p>
                  <FacebookIcon
                    sx={{
                      border: "1px solid #888888",
                      borderRadius: "1rem",
                      color: "white",
                      padding: "0.2rem",
                      marginRight: "1rem",
                    }}
                  />
                  <TwitterIcon
                    sx={{
                      border: "1px solid #888888",
                      borderRadius: "1rem",
                      color: "white",
                      padding: "0.2rem",
                      marginRight: "1rem",
                    }}
                  />
                  <GoogleIcon
                    sx={{
                      border: "1px solid #888888",
                      borderRadius: "1rem",
                      color: "white",
                      padding: "0.2rem",
                    }}
                  />
                  <p>Call Now</p>
                  
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{backgroundColor:"gray"}}/>
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                sx={{ textAlign: "center", mb: "2rem",mt:"10px" }}
              >
                © {new Date().getFullYear()} All Rights Reserved by Traideas.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default index;
