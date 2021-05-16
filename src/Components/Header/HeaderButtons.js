import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Divider } from "../shared/StyledComponents";
import HamburgerMenu from "react-hamburger-menu";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-end",
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
    font: "normal normal normal 1.3rem/1rem Lato",
    opacity: 0.75,
    transition: "color .5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    "&:hover": {
      color: theme.palette.primary.main,
      background: "transparent",
    },
    marginLeft: ".25rem",
    marginRight: ".25rem",
  },
  hamburger: {
    marginLeft: "auto",
    marginRight: "2rem",
    marginBottom: "auto",
    marginTop: "1.75rem",
  },
}));

const HeaderButtons = (props) => {
  const { fullScreen } = props;
  const classes = useStyles();
  return fullScreen ? (
    <div className={classes.hamburger}>
      <HamburgerMenu isOpen={false} menuClicked={null} />
    </div>
  ) : (
    <div className={classes.buttonGroup}>
      <Button className={classes.button} variant="text">
        Centro
      </Button>
      <Divider opacity={0.5} />
      <Button className={classes.button} variant="text">
        CeloHub
      </Button>
      <Divider opacity={0.5} />
      <Button className={classes.button} variant="text">
        Contact
      </Button>
    </div>
  );
};

export default HeaderButtons;
