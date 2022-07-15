import React from "react";
import { lastIndexOf, substr } from "@7urtle/lambda";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./Routes";
import Body from "./Layout/Body";
// Materila ui
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#FD5A5B",
    },
  },
  
});
const getBasename = (path) => substr(lastIndexOf("/")(path))(0)(path);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={getBasename(window.location.pathname)}>
        <Body>
          <Routes />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default React.memo(App);
