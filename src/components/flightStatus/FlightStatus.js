import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardActions } from "@mui/material";

import { useAxios } from "../../hooks/useAxios";
import { airlinesApi, fligtStatusApi } from "../../api/apiEndpoints";
import { setAirlinesInfo } from "../../redux/slices/airlinesInfoSlice";

import classes from "./FlightStatus.module.scss";
import CustomTextField from "../ui/CustomTextField";
import CustomAutocomplete from "../ui/CustomAutocomplete";

export const FlightStatus = () => {
  const dispatch = useDispatch();
  const airlinesCodes = useSelector((state) => state.airlines.data);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const [flightStatus, setflightStatus] = useState([]);
  const { fetchData } = useAxios();

  const registerHandler = (data) => {
    console.log(data);
    fetchData({
      url: fligtStatusApi,
      method: "GET",
      params: { ...data, carrierCode: data.id },
    }).then((res) => {
      if (res?.data != null && res?.statusText === "OK") {
        setflightStatus(res?.data);
      } else {
        return;
      }
    });
    reset();
  };
  const handleReset = () => {
    reset();
  };
  useEffect(() => {
    // if (iataCodes === undefined)
    fetchData({
      url: airlinesApi,
      method: "GET",
    }).then((res) => {
      if (res?.data != null && res?.statusText === "OK") {
        dispatch(setAirlinesInfo(res?.data));
      } else {
        return;
      }
    });
  }, []);
  const iataCodes = airlinesCodes?.map((i) => {
    return {
      id: i.iataCode,
      label:
        i.commonName != undefined
          ? `${i.iataCode} - ${i.commonName}`
          : i.iataCode,
    };
  });
  return (
    <div>
      <h1 className="fs-heading">Flight Status</h1>
      <div className={`${classes.main_container} flex-center`}>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className={`${classes.form} flex`}
        >
          <div className={classes.form_fields}>
            <CustomAutocomplete
              name="carrierCode"
              options={iataCodes}
              label="Airline Code"
              control={control}
            />
          </div>

          <div className={classes.form_fields}>
            <CustomTextField
              name="flightNumber"
              label="Flight Number"
              control={control}
            />
          </div>
          <div className={classes.form_fields}>
            <CustomTextField
              name="scheduledDepartureDate"
              label="Date"
              control={control}
            />
          </div>

          <Button fullWidth variant="contained" color="secondary" type="Submit">
            Search Flight
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleReset}
          >
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
