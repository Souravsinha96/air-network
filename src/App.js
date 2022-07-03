import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/Store";
import { theme } from "./config/Theme";
import RouteInfo from "./routes/RouteInfo";
import Loader from "./components/ui/Loader";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Loader />
        <HashRouter>
          <RouteInfo />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            theme="colored"
          />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
