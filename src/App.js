import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import classes from "./App.module.scss";
import { theme } from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button color="secondary" variant="contained">
        dsds
      </Button>
      <Button variant="contained">dsds</Button>
    </ThemeProvider>
  );
}

export default App;
