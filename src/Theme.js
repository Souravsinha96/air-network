import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "PoppinsRegular, Arial",
  },
  palette: {
    primary: { main: "#ff4400" },
    secondary: { main: "#eee980" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'PoppinsRegular';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url(${PoppinsRegular}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
        },
      },
    },
  },
});
