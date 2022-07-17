import {
  Button,
  Card,
  CardActions,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import classes from "./FlightStatus.module.scss";

export const FlightStatus = () => {
  const { handleSubmit, reset, control } = useForm();
  const { response, error, loading, fetchData } = useAxios();

  // useEffect(() => {
  //   fetchData({url:"/reference-data/airlines",baseURL:base_urlv1})
  // }, [])

  const registerHandler = (data) => {
    console.log(data);
    reset();
  };
  const handleReset = () => {
    reset();
  };
  return (
    <div>
      <h1 className="fs-heading">Flight Status</h1>
      <div className={`${classes.main_container} flex-center`}>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className={`${classes.form} flex`}
        >
          <div className={classes.form_fields}>
            <Controller
              render={({ field }) => (
                <FormControl focused size="small" fullWidth>
                  <InputLabel id="from-label">Airline Code</InputLabel>
                  <Select
                    labelId="Airline Code-label"
                    id="Airline Code"
                    {...field}
                    label="Airline Code"
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
              name="from"
              control={control}
            />
          </div>

          <div className={classes.form_fields}>
            <Controller
              render={({ field }) => (
                <FormControl focused size="small" fullWidth>
                  <InputLabel shrink={true} id="from-label">
                    Flight Number
                  </InputLabel>
                  <TextField
                    {...field}
                    label="Flight Number"
                    focused
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              )}
              name="flightNumber"
              control={control}
            />
          </div>
          <div className={classes.form_fields}>
            <Controller
              render={({ field }) => (
                <FormControl size="small" fullWidth>
                  <InputLabel shrink={true} id="from-label">
                    Date
                  </InputLabel>
                  <TextField
                    {...field}
                    label="Date"
                    focused
                    color="primary"
                    variant="outlined"
                    size="small"
                    type="date"
                  />
                </FormControl>
              )}
              name="scheduledDate"
              control={control}
            />
          </div>

          <Button
            className={classes.form_fields}
            variant="contained"
            color="secondary"
            type="Submit"
          >
            Search Flight
          </Button>
          <Button variant="outlined" color="error" onClick={handleReset}>
            Reset
          </Button>
        </form>
      </div>
      <div className={`${classes.status_container} flex`}>
        <Card>
          <CardActions>sdsad</CardActions>
        </Card>
      </div>
    </div>
  );
};
