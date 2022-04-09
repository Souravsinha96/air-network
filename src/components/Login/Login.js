import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

import amadeus_logo from "../../assets/images/amadeus_logo.png";
import logo from "../../assets/images/logo.png";
import classes from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    navigate("/status");
  };

  return (
    <div className={`${classes.bg} flex-center `}>
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </div>
        </form>
        <div className="flex-center">
          <span>powered by </span>
          <img src={amadeus_logo} alt="" width="200px" />
        </div>
      </section>
    </div>
  );
};

export default Login;
