import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logoImg from "../../image/Asset 1@2x.png";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const { user, logout } = useFirebase();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link href="/">
              <Image
                src={logoImg}
                alt="Hemica's Angels for Humanity"
                width={65}
                height={60}
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="/blog">Blog</Link>
                </Typography>

                <Typography textAlign="center">
                  <Link href="/ContactUs"> Contact </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link href="/">
              <Image
                src={logoImg}
                alt="Hemica's Angels for Humanity"
                width={65}
                height={60}
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/blog">
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                Blog
              </Button>
            </Link>

            <Link href="/ContactUs">
              <Button
              
                sx={{  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "16px",}}
              >
                Contact
              </Button>
            </Link>


            <Link href="/ContactInfo" >
              <Button   sx={{  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "16px",}}>
                Contact Info
              </Button>
            </Link>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user.email ? (
                  <LogoutIcon onClick={logout} sx={{ color: "black" }} />
                ) : (
                  <Link href="/login">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#DCC2B3",
                        color: "black",
                        ml: "16px",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    /*    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between"}}
        >
          <Box>
            <IconButton>
            <Link href="/">
              <Image
                src={logoImg}
                alt="Hemica's Angels for Humanity"
                width={65}
                height={60}
              />
            </Link>
            </IconButton>
         
            <Menu>
              <MenuItem><Typography></Typography></MenuItem>
            </Menu>
           

            <Link href="/ContactInfo" style={{ color: "black" }}>
              <Button sx={{ color: "black" }} variant="text">
                <b>Contact Info</b>
              </Button>
            </Link>




            <Link href="/blog">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#DCC2B3", color: "black" }}
              >
                Blog
              </Button>
            </Link>

            <Link href="/ContactUs">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#DCC2B3", color: "black", ml: "8px" }}
              >
                Contact us
              </Button>
            </Link>
          </Box>

          <Box>
           

            {user.email ? (
              <LogoutIcon onClick={logout} sx={{color:"black"}}/>
            ) : (
              <Link href="/login">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DCC2B3",
                    color: "black",
                    ml: "16px",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar> */
  );
};
export default Header;
