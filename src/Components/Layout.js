import React from "react";
import { useScreenType } from "../Hooks/useScreenType";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: props.background,
    width: "100%",
    height: "50rem",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    width: "min(80%, 93.125rem)",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
}));

const Layout = (props) => {
  const { left, right, priority = "left", background } = props;
  const classes = useStyles({ background });
  const screenType = useScreenType();

  return (
    <div className={classes.root}>
      {screenType === "fullscreen" ? (
        props[priority]
      ) : (
        <div className={classes.container}>
          {left}
          {right}
        </div>
      )}
    </div>
  );
};

export default Layout;
