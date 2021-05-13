import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  //theme goes here...
});

ReactDOM.render(
  <>
    <CssBaseline />
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </>,
  document.getElementById("root")
);

reportWebVitals(console.log);
