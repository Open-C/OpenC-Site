import React from "react";
import github from "../../Assets/github-logo.png";
import linkedin from "../../Assets/linkedin-logo.png";
import medium from "../../Assets/medium-logo.png";
import twitter from "../../Assets/twitter-logo.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "min(25rem, 30%)",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    width: "20%",
    height: "auto",
  },
}));

const ContactFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={github} alt="github" className={classes.icon} />
      <img src={linkedin} alt="github" className={classes.icon} />
      <img src={medium} alt="github" className={classes.icon} />
      <img src={twitter} alt="github" className={classes.icon} />
    </div>
  );
};

export default ContactFooter;
