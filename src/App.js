import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header showLogo={true} />
      So Long and Thanks for All the Fish
    </div>
  );
};

export default App;
