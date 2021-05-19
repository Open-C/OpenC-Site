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
    height: "20vh",
    background: (props) => props.background || "#5849FD",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    width: "min(25rem, 50%)",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
  },
  icon: {
    width: "20%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "100%",
    transition: "all 0.5s ease-in",

    "&:hover": {
      //opacity: 0.5,
      opacity: 1,
      transition: "all 0.4s cubic-bezier(0, 3.82, 1, 1)", //cubic-bezier(1, -0.7, 0, 3.4)",
      boxShadow: "-1px 1px 13px 4px " + theme.palette.secondary.main,
      background: theme.palette.secondary.main,
    },
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
