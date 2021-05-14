import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/celohub-full-logo.png";
import mockups from "../../Assets/celohub-mockup.png";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  mockup: {
    height: "auto",
    width: "min(41.9rem, 70%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: props.fullScreen ? "center" : "flex-start",
    padding: "1rem",
  }),
  centroLogo: {
    height: "auto",
    width: "min(37rem, 90%)",
  },
  content: {
    font: "normal normal normal 2rem/2.625rem Lato",
    color: "#000000",
    opacity: 0.75,
    marginTop: "2rem",
  },
  button: enrollBtn,
}));

const CeloHub = (props) => {
  const classes = useStyles({
    buttonBackground: "#35D07F",
    buttonColor: "#000000",
    fullScreen: props.fullScreen,
  });

  const LeftSide = (
    <div className={classes.infoContainer}>
      <img src={logo} className={classes.centroLogo} />
      <div className={classes.content}>
        A website for everything built on Celo —Apps, Dev Tools, Infrastructure,
        & more.
      </div>
      <Button className={classes.button}>View Website</Button>
    </div>
  );
  const RightSide = <img src={mockups} className={classes.mockup} />;

  return (
    <Layout
      left={LeftSide}
      right={RightSide}
      priority="left"
      background="#FFFFFF"
    />
  );
};

export default CeloHub;
