import React from "react";
import github from "../../Assets/github-logo.png";
import linkedin from "../../Assets/linkedin-logo.png";
import medium from "../../Assets/medium-logo.png";
import twitter from "../../Assets/twitter-logo.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    background: (props) => props.background || "#5849FD",
  },
  iconContainer: {
    display: "flex",
    width: "min(25rem, 30%)",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
    marginBottom: "2rem",
    marginTop: "-2rem",
  },
  icon: {
    width: "20%",
    height: "auto",
    cursor: "pointer",
  },
}));

const ContactFooter = (props) => {
  const { background } = props;
  const classes = useStyles({ background });
  return (
    <div className={classes.root}>
      <div className={classes.iconContainer}>
        <img
          src={github}
          alt="github"
          className={classes.icon}
          onClick={() => window.open("https://github.com/Open-C")}
        />
        <img
          src={linkedin}
          alt="github"
          className={classes.icon}
          onClick={() =>
            window.open("https://www.linkedin.com/company/celoorg/")
          }
        />
        <img
          src={medium}
          alt="github"
          className={classes.icon}
          onClick={() => window.open("https://www.medium.com")}
        />
        <img
          src={twitter}
          alt="github"
          className={classes.icon}
          onClick={() => window.open("https://www.twitter.com")}
        />
      </div>
    </div>
  );
};

export default ContactFooter;
