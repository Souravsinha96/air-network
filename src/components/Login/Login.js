import { useForm } from "react-hook-form";
import { Button, TextField, Zoom } from "@mui/material";

import amadeus_logo from "../../assets/images/amadeus_logo.png";
import logo from "../../assets/images/logo.png";
import classes from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Login = () => {
  const userRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    navigate("/status");
  };
  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <div className={`${classes.bg} flex-center `}>
      <Zoom in timeout={1000}>
        <section className={`${classes.container} flow`}>
          <header className={`flex-center fs-heading ${classes.header}`}>
            <img src={logo} alt="" />
            Login to your account
          </header>
          <form
            className={`${classes.bodyContainer} flow`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.row}>
              <TextField
                inputRef={userRef}
                {...register("username")}
                focused
                fullWidth
                size="small"
                placeholder="Username"
              />
            </div>
            <div className={classes.row}>
              <TextField
                {...register("password")}
                focused
                fullWidth
                size="small"
                placeholder="Password"
              />
            </div>
            <div className={classes.row}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </div>
          </form>
          <div className="flex-col-center">
            <span>powered by </span>
            <img src={amadeus_logo} alt="amadeus logo" width="200px" />
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default Login;
