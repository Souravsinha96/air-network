import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_OPTIONS } from "../constants/route-constants";

import {
  LoginPage,
  FlightStatusPage,
  AirportsPage,
  UserInfoPage,
} from "../pages/page-index";

const RouteInfo = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={ROUTE_OPTIONS.status} element={<FlightStatusPage />} />
        <Route path={ROUTE_OPTIONS.airports} element={<AirportsPage />} />
        <Route path={ROUTE_OPTIONS.airlines} element={<AirportsPage />} />
        <Route path={ROUTE_OPTIONS.userInfo} element={<UserInfoPage />} />
      </Routes>
    </Fragment>
  );
};
export default RouteInfo;
