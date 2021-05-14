import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { Divider } from "../shared/StyledComponents";
import logo from "../../Assets/opencfull@3x.png";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "7rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    position: "sticky",
    left: 0,
    top: 0,
    zIndex: 999,
  },
  buttonGroup: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-end",
    marginRight: "6rem",
    marginLeft: "auto",
  },
  logo: {
    width: "15.625rem",
    height: "5.375rem",
    marginLeft: "2rem",
    marginRight: "auto",
  },
}));

const Header = (props) => {
  const { showLogo } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {showLogo && <img src={logo} alt="OpenC Logo" className={classes.logo} />}
      <div className={classes.buttonGroup}>
        <Button variant="text">Centro</Button>
        <Divider />
        <Button variant="text">CeloHub</Button>
        <Divider />
        <Button variant="text">Contact</Button>
      </div>
    </div>
  );
};

export default withRouter(Header);
