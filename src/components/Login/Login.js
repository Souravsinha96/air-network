import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import { useGoogleAuth } from "../../hooks/useGoogleAuth";

import classes from "./Login.module.scss";

const Login = () => {
  const { onSignInClick, onSignOutClick } = useGoogleAuth();

  return (
    <>
      <Button onClick={onSignInClick} color="primary">
        Sign In
      </Button>
      <Button onClick={onSignOutClick} color="error">
        Sign out
      </Button>
    </>
  );
};

export default Login;
