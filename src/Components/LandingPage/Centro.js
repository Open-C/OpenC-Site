import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/centro-logo-full.png";
import mockups from "../../Assets/centro-mockups.png";
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
    color: "#FFFFFF",
    opacity: 0.75,
    marginTop: "2rem",
  },
  button: enrollBtn,
}));

const Centro = (props) => {
  const { fullScreen } = props;
  const classes = useStyles({
    buttonBackground: "#6153FF",
    buttonColor: "#FFFFFF",
    fullScreen,
  });

  const RightSide = (
    <div className={classes.infoContainer}>
      <img src={logo} className={classes.centroLogo} />
      <div className={classes.content}>
        Access everything in the Celo DeFi ecosystem from one app. Coming soon!
      </div>
      <Button className={classes.button}>Join the Waitlist</Button>
    </div>
  );
  const LeftSide = <img src={mockups} className={classes.mockup} />;

  return (
    <Layout
      left={LeftSide}
      right={RightSide}
      priority="right"
      background="#5849FD"
    />
  );
};

export default Centro;