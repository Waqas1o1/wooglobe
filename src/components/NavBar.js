import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import WooGlobeIcon from "../static/Wooglobe.png";
import { siteMap as pages } from "../Routes";
// import WooglobeBlackIcon from "../static/WooglobeBlack.png";
import { useScrollTrigger } from "@mui/material";
import { Link } from "react-router-dom";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = (props) => {
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
  function ChangeColorOnScroll(props) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined,
    });
    return React.cloneElement(props.children, {
      style: {
        backgroundColor: trigger ? "#fff" : "transparent",
        color: trigger ? "black" : "white",
        transition: trigger ? "0.1s" : "0.2s",
      },
    });
  }

  return (
    <>
      <ChangeColorOnScroll {...props}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ zIndex: 2 }}>
              {/* WooGLobe Imag */}
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <img
                  src={WooGlobeIcon}
                  alt="Wooglobe"
                  width={"200px"}
                  height={47}
                />
              </Box>
              {/* Menu Box */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  sx={{ color: "#fff" }}
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                  {pages.map((page, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Links */}
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, i) => (
                  <Link
                    key={i}
                    to={page.path}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button
                      key={i}
                      onClick={handleCloseNavMenu}
                      variant={page.title === "Submit" ? "contained" : "string"}
                      sx={{
                        my: 2,
                        display: "block",
                      }}
                    >
                      {page.title}
                    </Button>
                  </Link>
                ))}
              </Box>
              {/* Avater */}
              <Box
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ChangeColorOnScroll>
      <main>{props.children}</main>
    </>
  );
};
export default NavBar;
