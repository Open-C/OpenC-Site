import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <>
      <Header showLogo={true} />
      <Suspense fallback={LandingPage}>
        <Route path="/" exact component={LandingPage} />
        {/*Add new routes here!*/}
      </Suspense>
    </>
  );
};

export default App;
