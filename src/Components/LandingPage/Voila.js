import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/voila-logo.svg";
import title from "../../Assets/voila-text.png";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "auto",
    width: "min(13rem, 50%)",
  },
  title: {
    height: "auto",
    width: "min(34rem, 90%)",
    marginTop: "1.75rem",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    width: "100%",
    color: "#FFFFFF",
  },
  content: {
    marginTop: "1rem",
    opacity: 0.7,
  },
}));

const CeloHub = (props) => {
  const classes = useStyles();
  const Main = (
    <div className={classes.infoContainer}>
      <img src={logo} alt="Voila Logo" className={classes.logo} />
      <img src={title} alt="Voila Finance" className={classes.title} />
      <Typography variant="h2" className={classes.content}>
        ~Incognito~
      </Typography>
    </div>
  );
  return (
    <Layout priority="left" background="#5849FD">
      {Main}
    </Layout>
  );
};

export default CeloHub;
