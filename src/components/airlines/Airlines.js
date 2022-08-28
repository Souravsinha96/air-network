import HorizontalPanel from "../panel/HorizontalPanel";
import { DataGrid } from "@mui/x-data-grid";

import classes from "./Airlines.module.scss";
import { useSelector } from "react-redux";
const columns = [
  {
    field: "iataCode",
    headerName: "IATA Code",
    flex: 1,
  },
  {
    field: "icaoCode",
    headerName: "ICAO Code",
    flex: 1,
  },
  {
    field: "businessName",
    headerName: "Business Name",
    flex: 1,
  },
  {
    field: "commonName",
    headerName: "Common Name",
    flex: 1,
  },
];

const Airlines = () => {
  const airlinesData = useSelector((state) => state.airlines);

  const rows = airlinesData?.data?.map((item, key) => {
    return {
      id: key,
      iataCode: item.iataCode || "-",
      icaoCode: item.icaoCode || "-",
      businessName: item.businessName || "-",
      commonName: item.commonName || "-",
    };
  });
  return (
    <div className={classes.container}>
      <HorizontalPanel />
      <h1 className="fs-heading">Flight Status</h1>
      <div className={classes.tableContainer}>
        <DataGrid rows={rows || []} columns={columns} disableSelectionOnClick />
      </div>
    </div>
  );
};
export default Airlines;
