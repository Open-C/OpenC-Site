import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/pollen-logo.svg";
import title from "../../Assets/voila-text.png";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "auto",
    width: "min(23rem, 90%)",
  },
  title: (props) => ({
    opacity: 0.75,
    marginTop: "2rem",
    textAlign: props.fullScreen && "center",
  }),
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  content: {
    marginTop: "2rem",
    opacity: 0.7,
  },
}));

const CeloHub = (props) => {
  const classes = useStyles({ fullScreen: props.fullScreen });
  const Main = (
    <div className={classes.infoContainer}>
      <img src={logo} alt="Voila Logo" className={classes.logo} />
      <Typography variant="h2" className={classes.title}>
        Village banking via USSD for farmers in Zambia
      </Typography>
      <Typography variant="h6" className={classes.content}>
        ~ Private Beta ~
      </Typography>
    </div>
  );
  return <Layout background="#FFFFFF">{Main}</Layout>;
};

export default CeloHub;
