import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontSize: "clamp(1rem, 0.5714rem + 0.8929vw, 2rem)",
      fontWeight: "600",
    },
    h2: {
      fontSize: "clamp(0.8125rem, 0.6518rem + 0.3348vw, 1.1875rem)",
      fontWeight: "500",
    },
    body1: {
      fontSize: "clamp(0.75rem, 0.5357rem + 0.4464vw, 1.25rem)",
      fontWeight: "500",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "500",
    },
    caption: {
      fontSize: "0.8rem",
      fontWeight: "500",
    },
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
          "&.MuiButton-contained": { color: "#ffffff" },
        },
      },
    },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       fontWeight: 500,
    //     },
    //   },
    // },
  },
});
