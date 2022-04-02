import { Button, ThemeProvider } from "@mui/material";
import classes from "./App.module.scss";
import { theme } from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="secondary" variant="contained">
        dsds
      </Button>

      <div className={classes.app}>
        <div className={classes.hello}>hwkko</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
