import { useState } from "react";

import NavProfile from "./NavProfile";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, BadgeProps, Box, Button, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { styled } from '@mui/material/styles';


const settings = [{path: "/profile", name: "Profile"}, {path: "/order", name: "Order"},{path: "/logout", name: "Logout"}];

export default function Nav() {
  const favoriteList = useSelector((state:RootState) => state.products.favorites)
  const cartList = useSelector((state:RootState) => state.products.cart)

  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Favorites", path: "/favorites", badge: favoriteList.length },
    { name: "Cart", path: "/cart", badge: cartList.length },
    { name: "Sign in", path: "/login" },
  ];


  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.main", padding: "4px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
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
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <img src="https://i.ibb.co/8gt5Kb2/logo-color.png" alt="Logo" height="40px" width="40px" />
      </Typography>
          <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "space-around",
      }}
    >
      {pages.map((page) => (
        <Link to={`${page.path}`} style={{ textDecoration: "none" }}>
          <StyledBadge  badgeContent={page.badge} color="secondary">
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              variant="text"

              sx={{
                color: "white",
                display: "flex",
                fontWeight: "700",
              }}
            >
                  {page.name}
            </Button>
            </StyledBadge>
        </Link>
      ))}
    </Box>
          <NavProfile
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}