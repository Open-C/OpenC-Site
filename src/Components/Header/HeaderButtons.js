import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Divider } from "../shared/StyledComponents";
import HamburgerMenu from "react-hamburger-menu";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    height: "1.3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "2rem",
    marginLeft: "auto",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    // marginBottom: "auto",
    // marginTop:
  },
  button: {
    textTransform: "none",
    //font: "normal normal normal 1rem/1rem Lato",
    fontSize: "1.1rem",
    opacity: 0.8,
    transition: "color .5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    "&:hover": {
      color: theme.palette.primary.main,
      background: "transparent",
    },
    marginLeft: ".5rem",
    marginRight: ".5rem",
    cursor: "pointer",
  },
  hamburger: {
    marginLeft: "auto",
    marginRight: "2rem",
    marginBottom: "auto",
    marginTop: "1rem",
  },
}));

const HeaderButtons = (props) => {
  const { fullScreen } = props;
  const classes = useStyles();
  return fullScreen ? null : (
    <div className={classes.buttonGroup}>
      <Typography variant="h2" className={classes.button}>
        Centro
      </Typography>
      <Divider opacity={0.5} />
      <Typography variant="h2" className={classes.button}>
        CeloHub
      </Typography>
      <Divider opacity={0.5} />
      <Typography variant="h2" className={classes.button}>
        Contact
      </Typography>
    </div>
  );
};

export default HeaderButtons;
