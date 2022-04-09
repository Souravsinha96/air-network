import classes from "./Login.module.scss";
import logo from "../../assets/images/logo.png";
import { Button, TextField } from "@mui/material";
const Login = () => {
  return (
    <div className={`${classes.bg} flex-center`}>
      <section className={classes.container}>
        <header className={`flex-center fs-heading ${classes.header}`}>
          <img src={logo} alt="" />
          Login to your account
        </header>
        <form className={`flow`}>
          <TextField focused fullWidth size="small" />
          <TextField focused fullWidth size="small" />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
