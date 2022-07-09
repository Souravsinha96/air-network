import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Fragment } from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./AppBar.module.scss";
import { settings } from "../../constants/settings-constant";

const AppBar = () => {
  const [menu, setmenu] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const toggleDrawer = () => {
    setmenu(!menu);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={`${classes.container} flex-center`}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <div>
          <Fragment key="menu">
            <IconButton onClick={toggleDrawer}>
              <MenuIcon htmlColor="#5048E5" />
            </IconButton>
            <Drawer anchor="left" open={menu} onClose={toggleDrawer}>
              sdsdsds
            </Drawer>
          </Fragment>
        </div>
      </div>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
        disablePortal
      >
        {settings.map((item) => (
          <MenuItem onClick={handleCloseUserMenu}>
            <div className={classes.menu_item}>
              {item.icon} {item.name}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default AppBar;
