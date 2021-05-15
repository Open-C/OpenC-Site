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
    marginRight: "6rem",
    marginLeft: "auto",
    // marginBottom: "auto",
    // marginTop:
  },
  button: {
    textTransform: "none",
    font: "normal normal normal 1.5rem/2rem Lato",
    opacity: 0.75,
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
      <Divider />
      <Button className={classes.button} variant="text">
        CeloHub
      </Button>
      <Divider />
      <Button className={classes.button} variant="text">
        Contact
      </Button>
    </div>
  );
};

export default HeaderButtons;
