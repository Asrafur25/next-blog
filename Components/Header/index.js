import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logoImg from "../../image/Asset 1@2x.png";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Box>
            <Link href="/">
              <Image
                src={logoImg}
                alt="Hemica's Angels for Humanity"
                width={65}
                height={60}
              />
            </Link>
          </Box>

          <Box>
            <Link href="/Blog">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#DCC2B3", color: "black" }}
              >
                Blog
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default index;
