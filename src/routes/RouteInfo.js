import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage, FlightStatusPage, AirportsPage } from "../pages/page-index";

const RouteInfo = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/status" element={<FlightStatusPage />} />
        <Route path="/airports" element={<AirportsPage />} />
      </Routes>
    </Fragment>
  );
};
export default RouteInfo;
