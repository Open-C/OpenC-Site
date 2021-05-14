import React from "react";
import { useScreenType } from "../Hooks/useScreenType";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    background: props.background,
    width: "100%",
    height: "50rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  container: {
    width: "min(90%, 93.125rem)",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

const Layout = (props) => {
  const { left, right, priority = "left", background, children } = props;
  const classes = useStyles({ background });
  const screenType = useScreenType();

  return (
    <div className={classes.root}>
      {screenType === "fullscreen" ? (
        props[priority] || children
      ) : (
        <div className={classes.container}>
          {left}
          {children}
          {right}
        </div>
      )}
    </div>
  );
};

export default Layout;
