import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import classes from "./Login.module.scss";

const Login = () => {
  let auth = useRef("");
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOLE_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = (isSignedIn) => {
    console.log(auth.current);
  };
  const onSignInClick = () => {
    auth.current.signIn();
  };
  const onSignOutClick = () => {
    auth.current.signOut();
  };
  console.log(auth.current);
  return (
    <>
      {" "}
      <Button onClick={onSignInClick} variant="contained" color="primary">
        Sign In
      </Button>
      <Button onClick={onSignOutClick} variant="contained" color="error">
        Sign out
      </Button>
    </>
  );
};

export default Login;
