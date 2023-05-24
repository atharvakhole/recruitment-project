import { createTheme } from "@mui/material";
import "@fontsource/barlow-condensed";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3949ab",
    },
    secondary: {
      main: "#2979ff",
    },
  },
  typography: {
    h2: {
      fontFamily: "Barlow Condensed, sans-serif",
      fontWeight: 600,
      fontSize: "3.25rem",
    },
  },
});

export default theme;
