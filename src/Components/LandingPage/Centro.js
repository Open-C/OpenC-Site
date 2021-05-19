import React, { forwardRef } from "react";
import Layout from "../Layout";
import logo from "../../Assets/centro-logo-full.png";
import mockups from "../../Assets/centro-mockups.png";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn, SlideIn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  mockup: {
    height: "auto",
    width: "min(41.9rem, 50%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    //alignItems: props.fullScreen ? "center" : "flex-start",
    padding: "1rem",
    // "@media (max-width:799px)": {
    //   boxShadow: `${theme.palette.primary.light} -3px 4px 20px 0px`,
    //   width: "90%",
    //   borderRadius: "2%",
    // },
  }),
  centroLogo: {
    height: "auto",
    width: "min(37rem, 75%)",
    "@media (max-width:799px)": {
      width: "90%",
    },
  },
  content: (props) => ({
    color: "#FFFFFF",
    opacity: 0.75,
    marginTop: "2rem",
    //textAlign: props.fullScreen && "center",
  }),
  button: (props) =>
    enrollBtn({
      ...props,
      hoverProps: { background: theme.palette.centroBlue },
    }),
}));

const Centro = forwardRef((props, ref) => {
  const { fullScreen } = props;
  const classes = useStyles({
    buttonBackground: "#6153FF",
    buttonColor: "#FFFFFF",
    fullScreen,
  });
  const animations = SlideIn();

  const RightSide = (
    <div className={`${classes.infoContainer}`}>
      <img src={logo} className={classes.centroLogo} />
      {/* <div className={classes.content}>
        Access everything in the Celo DeFi ecosystem from one app. Coming soon!
      </div> */}
      <Typography variant="h2" className={classes.content}>
        Access everything in the Celo DeFi ecosystem from one app. Coming soon!
      </Typography>
      <Button
        className={classes.button}
        onClick={() => window.open("https://forms.gle/qckLeufNDWXURn8i9")}
      >
        Join the Waitlist
      </Button>
    </div>
  );
  const LeftSide = <img src={mockups} className={`${classes.mockup}`} />;

  return (
    <div ref={ref}>
      <Layout
        left={LeftSide}
        right={RightSide}
        priority="right"
        background="#5849FD"
      />
    </div>
  );
});

export default Centro;
