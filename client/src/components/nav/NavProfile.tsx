import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type Prop = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  settings: { path: string; name: string }[];
};

export default function NavProfile({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  settings,
}: Prop) {
  const avatars =
    {
      alt: "man",
      link: "https://cdn-icons-png.flaticon.com/512/727/727399.png?w=826&t=st=1690526661~exp=1690527261~hmac=8dadc4692b97a9619aca2e7bde77423a046b9d18337b4707b818401d0b24c89f",
    }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Eduardo" src={avatars.link} />
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
          <Link to={setting.path} style={{textDecoration: "none", color: "inherit"}} >
            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}
