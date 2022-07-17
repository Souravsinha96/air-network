import { ROUTE_OPTIONS } from "./route-constants";

export const BREADCRUMB_OPTIONS = {
  airportsInfo: {
    linkArray: [
      { name: "Flight Status", link: ROUTE_OPTIONS.status },
      { name: "Airports", link: ROUTE_OPTIONS.airports },
    ],
    activePage: "Airports Info",
  },
};
