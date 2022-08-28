import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { SETTINGS_OPTIONS } from "../../constants/settings-constant";
import MainMenu from "../menu/Menu";
import logo from "../../assets/images/logo.png";
import { ROUTE_OPTIONS } from "../../constants/route-constants";

import classes from "./AppBar.module.scss";

const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const handleUserInfo = () => {
    navigate(ROUTE_OPTIONS.userInfo);
  };
  const handleLogout = () => {
    dispatch({ type: "logout" });
    delete axios.defaults.headers.common["Authorization"];
    navigate(ROUTE_OPTIONS.login);
  };

  return (
    <div className={`${classes.container} flex-center`}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <div>
          <Fragment key="menu">
            <IconButton color="secondary" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={menu} onClose={toggleDrawer}>
              <MainMenu />
            </Drawer>
          </Fragment>
        </div>
      </div>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="SS" sx={{ bgcolor: "secondary.main" }}>
            <AccountCircleOutlinedIcon />
          </Avatar>
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
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        disablePortal
      >
        <MenuItem
          key={SETTINGS_OPTIONS.home.name}
          onClick={() => navigate(ROUTE_OPTIONS.status)}
          sx={{ gap: "1em" }}
        >
          {SETTINGS_OPTIONS.home.icon} {SETTINGS_OPTIONS.home.name}
        </MenuItem>

        <MenuItem
          key={SETTINGS_OPTIONS.profile.name}
          onClick={handleUserInfo}
          sx={{ gap: "1em" }}
        >
          {SETTINGS_OPTIONS.profile.icon} {SETTINGS_OPTIONS.profile.name}
        </MenuItem>

        <MenuItem
          key={SETTINGS_OPTIONS.logout.name}
          onClick={handleLogout}
          sx={{ gap: "1em" }}
        >
          {SETTINGS_OPTIONS.logout.icon} {SETTINGS_OPTIONS.logout.name}
        </MenuItem>
      </Menu>
    </div>
  );
};
export default AppBar;
