import React, { forwardRef } from "react";
import Layout from "../Layout";
import logo from "../../Assets/centro-logo-full.png";
import mockups from "../../Assets/centro-mockups.png";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";

const useStyles = makeStyles((theme) => ({
  mockup: {
    height: "auto",
    width: "min(41.9rem, 70%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: props.fullScreen ? "center" : "flex-start",
    padding: "1rem",
  }),
  centroLogo: {
    height: "auto",
    width: "min(37rem, 90%)",
  },
  content: (props) => ({
    color: "#FFFFFF",
    opacity: 0.75,
    marginTop: "2rem",
    textAlign: props.fullScreen && "center",
  }),
  button: (props) => enrollBtn(props),
}));

const Centro = forwardRef((props, ref) => {
  const { fullScreen } = props;
  const classes = useStyles({
    buttonBackground: "#6153FF",
    buttonColor: "#FFFFFF",
    fullScreen,
  });

  const RightSide = (
    <div className={classes.infoContainer}>
      <img src={logo} className={classes.centroLogo} />
      {/* <div className={classes.content}>
        Access everything in the Celo DeFi ecosystem from one app. Coming soon!
      </div> */}
      <Typography variant="h2" className={classes.content}>
        Access everything in the Celo DeFi ecosystem from one app. Coming soon!
      </Typography>
      <Button
        className={classes.button}
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
      >
        Join the Waitlist
      </Button>
    </div>
  );
  const LeftSide = <img src={mockups} className={classes.mockup} />;

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
