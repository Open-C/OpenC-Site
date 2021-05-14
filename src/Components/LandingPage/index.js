import React from "react";
import Centro from "./Centro";
import CeloHub from "./CeloHub";
import Voila from "./Voila";
import Pollen from "./Pollen";
import { useScreenType } from "../../Hooks/useScreenType";

const LandingPage = (props) => {
  const isFullScreen = useScreenType() === "fullscreen";
  return (
    <>
      <Centro fullScreen={isFullScreen} />
      <CeloHub fullScreen={isFullScreen} />
      <Voila />
      <Pollen />
    </>
  );
};

export default LandingPage;
