import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { useDispatch } from "react-redux";

import { ROUTE_OPTIONS } from "../../constants/route-constants";
import { login } from "../../redux/slices/userSlice";
import amadeus_logo from "../../assets/images/amadeus_logo.png";
import logo from "../../assets/images/logo.png";
import { loginApi } from "../../api/apiEndpoints";
import LoginButton from "../ui/Buttons/LoginButton";

import classes from "./Login.module.scss";

const Login = () => {
  const { response, error, fetchData } = useAxios();
  const [appData, setAppData] = useState({});
  const userRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetchData({
      url: loginApi,
      method: "POST",
      data: `grant_type=client_credentials&client_id=${process.env.REACT_APP_AMADEUS_API_KEY}&client_secret=${process.env.REACT_APP_AMADEUS_API_SECRET}`,
    });
    setAppData(data);
  };

  useEffect(() => {
    userRef.current.focus();
    if (response?.data != null && response?.data.username === appData?.email) {
      navigate(ROUTE_OPTIONS.status);
      dispatch(login(response.data));
    } else {
      return;
    }
  }, [response, appData, dispatch, navigate]);

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
                {...register("email")}
                focused
                fullWidth
                size="small"
                placeholder="Email"
              />
            </div>
            <div className={classes.row}>
              <TextField
                {...register("applicationName")}
                focused
                fullWidth
                size="small"
                placeholder="Application Name"
              />
            </div>
            <div className={classes.row}>
              <LoginButton text="Login" />
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
