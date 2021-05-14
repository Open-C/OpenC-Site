import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/pollen-logo.svg";
import title from "../../Assets/voila-text.png";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "auto",
    width: "23rem",
  },
  title: {
    font: "normal normal normal 30px/36px Lato",
    opacity: 0.75,
    color: "#191919",
    marginTop: "4rem",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
}));

const CeloHub = (props) => {
  const classes = useStyles();
  const Main = (
    <div className={classes.infoContainer}>
      <img src={logo} alt="Voila Logo" className={classes.logo} />
      <h1 className={classes.title}>
        Village banking via USSD for farmers in Zambia
      </h1>
    </div>
  );
  return <Layout background="#FFFFFF">{Main}</Layout>;
};

export default CeloHub;
