import React, { forwardRef } from "react";
import Layout from "../Layout";
import logo from "../../Assets/celohub-full-logo.png";
import mockups from "../../Assets/celohub-mockup.png";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  mockup: {
    height: "auto",
    width: "min(41.9rem, 50%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    //alignItems: props.fullScreen ? "center" : "flex-start",
    padding: "1rem",
    width: !props.fullScreen && "50%",
  }),
  centroLogo: {
    height: "auto",
    width: "min(37rem, 70%)",
    "@media (max-width:799px)": {
      width: "90%",
    },
  },
  content: (props) => ({
    opacity: 0.75,
    marginTop: "1.5rem",
    //textAlign: props.fullScreen && "center",
  }),
  button: (props) =>
    enrollBtn({
      ...props,
      hoverProps: {
        background: theme.palette.celoGold,
      },
    }),
}));

const CeloHub = forwardRef((props, ref) => {
  const classes = useStyles({
    buttonBackground: "#35D07F",
    buttonColor: "#000000",
    fullScreen: props.fullScreen,
  });

  const LeftSide = (
    <div className={classes.infoContainer}>
      <img src={logo} className={classes.centroLogo} />
      <Typography variant="h2" className={classes.content}>
        A website for everything built on Celo —Apps, Dev Tools, Infrastructure,
        & more.
      </Typography>
      <Button
        className={classes.button}
        onClick={() => window.open("https://celohub.org/")}
      >
        View Website
      </Button>
    </div>
  );
  const RightSide = <img src={mockups} className={classes.mockup} />;

  return (
    <div ref={ref}>
      <Layout
        left={LeftSide}
        right={RightSide}
        priority="left"
        background="#FFFFFF"
      />
    </div>
  );
});

export default CeloHub;
