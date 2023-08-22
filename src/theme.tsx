import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#98cc03",
    },
    secondary: {
      main: "#043133",
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
