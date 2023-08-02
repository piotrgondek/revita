import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#b9d416",
    },
    secondary: {
      main: "#0a1d1e",
    },
    text: {
      primary: "#766503",
    },
  },
  spacing: 16,
  shape: {
    borderRadius: 20,
  },
});

export default theme;
