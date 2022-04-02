import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: { main: "#5048E5" },
    secondary: { main: "#10B981" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
          color: "#fff",
        },
      },
    },
  },
});
