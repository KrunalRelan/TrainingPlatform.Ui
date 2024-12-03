import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Set light mode
    background: {
      default: "#f9f9f9", // Page background color
      paper: "#ffffff", // Component background color
    },
    text: {
      primary: "#333333", // Default text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
