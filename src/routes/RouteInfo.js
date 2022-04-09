import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Airports } from "../components/airports/Airports";
import { FlightStatus } from "../components/flightStatus/FlightStatus";
import { LoginPage } from "../pages/page-index";

const RouteInfo = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/status" element={<FlightStatus />} />
        <Route path="/airports" element={<Airports />} />
      </Routes>
    </Fragment>
  );
};
export default RouteInfo;
