import React, { useRef, useState, useEffect } from "react";
import logo from "../../Assets/opencfull@3x.png";
import projectsImg from "../../Assets/featured-projects-icon.png";
import downArrow from "../../Assets/DownArrow.png";
import { makeStyles, Typography } from "@material-ui/core";
import HeaderButtons from "../Header/HeaderButtons";
import clsx from "clsx";

const MainPage = (props) => {
  const { scrollDown, fullScreen } = props;
  const classes = useStyles({ fullScreen });

  const logoRef = useRef(null);

  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(logoRef.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const Logo = (
    <img
      src={logo}
      alt="OpenC Logo"
      id="openC-logo"
      className={clsx(classes.openCLogo, {
        [classes.openCLogoHeader]: !isIntersecting,
      })}
    />
  );

  const Top = (
    <div className={classes.containerTop}>
      {/* {!isIntersecting && Logo} */}
      <HeaderButtons fullScreen={fullScreen} />
    </div>
  );
  const Left = (
    <div className={classes.infoContainer}>
      <div ref={logoRef} className={classes.scrollDetection} />

      {Logo}
      {!isIntersecting && <div className={classes.logoPlaceHolder} />}
      <Typography variant="h1" className={classes.subtitle}>
        Open Source Projects on the Celo Blockchain
      </Typography>
      <Typography variant="h2" className={classes.content}>
        Funded by the Celo Foundation, CCF, and Flori Ventures.
      </Typography>
    </div>
  );
  const Right = (
    <img
      src={projectsImg}
      className={classes.projects}
      alt="featured-projects-logo"
    />
  );
  return (
    <div className={classes.root}>
      {Top}
      <div className={classes.containerOuter}>
        <div className={classes.containerInner}>
          {Left}
          {!fullScreen && Right}
        </div>
        <div>
          <img
            src={downArrow}
            alt="Down Arrow"
            className={classes.down}
            onClick={scrollDown}
          />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "101vh",
    //minHeight: "7rem",
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
  },
  containerTop: {
    width: "100%",
    display: "flex",
    height: "7rem",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    background: "#FFFFFF",
    zIndex: 2,
  },
  containerOuter: {
    width: "min(90%, 93.125rem)",
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  containerInner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  projects: {
    height: "auto",
    width: "min(35rem, 40%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    width: !props.fullScreen && "50%",
    alignItems: props.fullScreen ? "center" : "flex-start",
    padding: "1rem",

    font: "normal normal normal 2.5rem/3rem Lato",
  }),
  openCLogo: {
    height: "auto",
    width: "min(37rem, 90%)",
    transition: "all 1s ease-in-out",
    zIndex: 999,
    position: "sticky",
    top: 10,
    left: "5vw",
  },
  openCLogoHeader: {
    width: "15.625rem",
    height: "auto",
    //marginLeft: "2rem",
    //marginRight: "auto",
    transition: "all 1s ease-in-out",
    position: "fixed",
    left: "2rem",
    top: 10,
    //transform: "translate3d(-150px, 0, 0)",
  },
  logoPlaceHolder: {
    height: "13rem",
  },
  content: {
    opacity: 0.75,
    marginTop: "2rem",
    fontSize: "2rem",
    lineHeight: "2.25rem",
  },
  subtitle: {
    opacity: 1,
    marginTop: "2rem",
  },
  down: {
    maxHeight: "6rem",
    width: "auto",
    cursor: "pointer",
    marginTop: "auto",
    marginBottom: "1rem",
  },
  scrollDetection: {
    width: 5,
    height: 5,
  },
}));

export default MainPage;
