import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../../Assets/opencfull@3x.png";
import { withRouter } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";

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
      <HeaderButtons {...props} />{" "}
    </div>
  );
};

export default withRouter(Header);
