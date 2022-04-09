import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Loader = () => {
  const loadingState = useSelector((state) => state.loader);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loadingState}
    >
      <CircularProgress color="inherit" size={60} thickness={5} />
    </Backdrop>
  );
};
export default Loader;
