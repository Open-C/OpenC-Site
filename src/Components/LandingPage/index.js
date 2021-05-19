import React, { useRef, useState, useEffect } from "react";
import Centro from "./Centro";
import CeloHub from "./CeloHub";
import Voila from "./Voila";
import Pollen from "./Pollen";
import MainPage from "./MainPage";
import { useScreenType } from "../../Hooks/useScreenType";
import useOnScreen from "../../Hooks/useOnScreen";
import { makeStyles } from "@material-ui/core";
import ContactUs from "./ContactUs";
import ContactFooter from "./ContactFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
}));

const LandingPage = (props) => {
  const isFullScreen = useScreenType() === "fullscreen";
  const centroRef = useRef();
  const classes = useStyles();
  // const centroVisible = useOnScreen(centroRef);
  // useEffect(() => {
  //   centroVisible && scrollToRef(centroRef);
  // });
  // let lastScroll = 0;

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   if (lastScroll === 0 && position > 0) {
  //     console.log("Scroll!");
  //     scrollToRef(centroRef);
  //   }
  //   console.log(lastScroll);
  //   lastScroll = position;
  // };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.root}>
      <MainPage
        scrollDown={() => scrollToRef(centroRef)}
        fullScreen={isFullScreen}
      />
      <Centro ref={centroRef} fullScreen={isFullScreen} />
      <CeloHub fullScreen={isFullScreen} />
      <Voila />
      <Pollen fullScreen={isFullScreen} />
      <ContactUs />
      <ContactFooter />
    </div>
  );
};

export default LandingPage;
