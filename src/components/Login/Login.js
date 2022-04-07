import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from "@mui/material";

import { Modal } from "../ui/modal/Modal";

import classes from "./Login.module.scss";

const Login = () => {
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={onSignInClick} variant="contained" color="primary">
        Sign In
      </Button>
      <Button onClick={onSignOutClick} variant="contained" color="error">
        Sign out
      </Button>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Click Me
      </Button>

      <Modal open={open} onClose={handleClose} title="Confirm">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth focused placeholder="placeholder" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth focused placeholder="placeholder" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth focused placeholder="placeholder" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth focused placeholder="placeholder" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
};

export default Login;
