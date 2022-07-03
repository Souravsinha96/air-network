import logo from "../../assets/images/logo.png";

import classes from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <div className={`${classes.container} flex-center`}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>Settings</div>
    </div>
  );
};
export default AppBar;
