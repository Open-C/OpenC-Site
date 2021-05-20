import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { useScreenType } from "./Hooks/useScreenType";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#776CF5",
      light: "#C5C0FB",
      dark: "#4B3CF1",
    },
    secondary: {
      main: "#F0BE16",
      dark: "#AF880B",
      light: "#F5D468",
    },
    celoGold: "#fbcc5c",
    centroBlue: "#0062ff",
    gray: "#edeeef",
  },
  typography: {
    fontFamily: "Lato, Arial",
    h2: {
      fontSize: "1.3rem",
      lineHeight: "1.5rem",
      "@media (min-width: 800px)": {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      "@media (min-width:1260px)": {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
      "@media (min-width:1400px)": {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
    },
    h1: {
      fontSize: "2.25rem",
      lineHeight: "2.60rem",
      "@media (min-width: 800px)": {
        fontSize: "2rem",
        lineHeight: "2.2rem",
      },
      "@media (min-width:1260px)": {
        fontSize: "2.5rem",
        lineHeight: "2.75rem",
      },
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {<Header showLogo={false} />} */}
        <Suspense fallback={LandingPage}>
          <Route path="/" exact component={LandingPage} />
          {/*Add new routes here!*/}
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
