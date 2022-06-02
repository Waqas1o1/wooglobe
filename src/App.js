import React from "react";
import { lastIndexOf, substr } from "@7urtle/lambda";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Scrollbars } from "react-custom-scrollbars-2";
import Routes from "./Routes";
import Body from "./Layout/Body";
// Materila ui
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});
const getBasename = (path) => substr(lastIndexOf("/")(path))(0)(path);

function App() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <div className="App">
          <article>
            <Router basename={getBasename(window.location.pathname)}>
              <Body>
                <Routes />
              </Body>
            </Router>
          </article>
        </div>
      </Scrollbars>
    </ThemeProvider>
  );
}

export default React.memo(App);
