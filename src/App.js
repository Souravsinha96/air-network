import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { HashRouter } from "react-router-dom";

import { theme } from "./config/Theme";
import RouteInfo from "./routes/RouteInfo";

import "react-toastify/dist/ReactToastify.css";
import classes from "./App.module.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <RouteInfo />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          theme="colored"
        />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
