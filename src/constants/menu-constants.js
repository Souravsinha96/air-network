import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FlightIcon from "@mui/icons-material/Flight";
import { ROUTE_OPTIONS } from "./route-constants";

const MENU_NAMES = {
  status: "Flight Status",
  airports: "Airports",
  airlines: "Airlines",
};

export const MENU_OPTIONS = [
  {
    name: MENU_NAMES.status,
    icon: <ConnectingAirportsIcon />,
    whiteIcon: <ConnectingAirportsIcon htmlColor="#fff" />,
    route: ROUTE_OPTIONS.status,
  },
  {
    name: MENU_NAMES.airports,
    icon: <FlightIcon />,
    whiteIcon: <FlightIcon htmlColor="#fff" />,
    route: ROUTE_OPTIONS.airports,
  },
  {
    name: MENU_NAMES.airlines,
    icon: <FlightIcon />,
    whiteIcon: <FlightIcon htmlColor="#fff" />,
    route: ROUTE_OPTIONS.airlines,
  },
];
