import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/page-index";

const RouteInfo = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};
export default RouteInfo;
