import React, { useRef, useState, useEffect } from "react";
import logo from "../../Assets/opencfull@3x.png";
import circle from "../../Assets/openC-color.png";
import logoText from "../../Assets/openC-text.png";
import projectsImg from "../../Assets/featured-projects-icon.png";
import downArrow from "../../Assets/DownArrow.png";
import { makeStyles, Typography } from "@material-ui/core";
import HeaderButtons from "../Header/HeaderButtons";
import clsx from "clsx";
import "../shared/shared.css";
import { SlideIn } from "../shared/MaterialStyles";

const MainPage = (props) => {
  const {
    scrollDown,
    fullScreen,
    scrollTo,
    centroRef,
    celoHubRef,
    contactUsRef,
  } = props;
  const classes = useStyles({ fullScreen });
  const animations = SlideIn();
  const [logoClicked, setLogoClicked] = useState(false);

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
      onClick={
        !isIntersecting &&
        (() => window.scrollTo({ top: 0, behavior: "smooth" }))
      }
    />
  );

  const Logov2 = (
    <div
      className={clsx(classes.openCLogo, {
        [classes.openCLogoHeader]: !isIntersecting,
      })}
      onClick={() => {
        if (!isIntersecting) window.scrollTo({ top: 0, behavior: "smooth" });
        setLogoClicked(!logoClicked);
      }}
    >
      <img
        src={circle}
        alt="OpenC Logo"
        id="openC-logo"
        className={clsx(classes.circle, {
          [classes.circleClicked]: logoClicked,
        })}
      />
      <img src={logoText} alt="OpenC" className={classes.logoText} />
    </div>
  );

  const Top = (
    <div
      className={`${classes.containerTop} ${
        !isIntersecting && classes.containerTopShow
      }`}
    >
      {/* {!isIntersecting && Logo} */}
      <HeaderButtons
        fullScreen={fullScreen}
        handleClick={scrollTo}
        {...{ centroRef, celoHubRef, contactUsRef }}
      />
    </div>
  );
  const Left = (
    <div className={`${classes.infoContainer}`}>
      <div ref={logoRef} className={classes.scrollDetection} />

      {Logov2}
      {!isIntersecting && <div className={classes.logoPlaceHolder} />}
      <Typography variant="h1" className={classes.subtitle}>
        Open Source Projects on the Celo Blockchain
      </Typography>
      <Typography variant="h2" className={classes.content}>
        Funded by the Celo Foundation and Flori Ventures.
      </Typography>
    </div>
  );
  const Right = (
    <img
      src={projectsImg}
      className={`${classes.projects}`}
      alt="featured-projects-logo"
    />
  );
  return (
    <div className={`${classes.root} `}>
      {Top}
      <div className={classes.containerOuter}>
        <div className={`${classes.containerInner} ${animations.appear}`}>
          {Left}
          {!fullScreen && Right}
        </div>
        <div className={animations.appear}>
          <img
            src={downArrow}
            alt="Down Arrow"
            className={`${classes.down}`}
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
    "@media (max-width:799px)": {
      marginBottom: "auto",
      background: theme.palette.gray,
    },
  },
  containerTop: {
    width: "100%",
    display: "flex",
    height: "5rem",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    background: "#FFFFFF",
    zIndex: 2,
    transition: "all 1s ease-in",

    "@media (max-width:799px)": {
      height: "3rem",
      background: "none",
    },
  },
  containerTopShow: {
    transition: "all 1s ease-in",
    background: "#FFFFFF",
  },
  containerOuter: {
    width: "min(90%, 93.125rem)",
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "static",
    "@media (max-width:799px)": {
      justifyContent: "flex-start",
    },
  },
  containerInner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    //margin: "auto",
    alignSelf: "center",
    "@media (max-width:799px)": {
      marginTop: "15vh",
    },
  },
  projects: {
    height: "auto",
    width: "min(35rem, 30%)",
  },
  infoContainer: (props) => ({
    display: "flex",
    flexDirection: "column",
    width: !props.fullScreen && "70%",
    alignItems: "flex-start",
    background: "#FFFFFF",
    padding: "1rem",
    "@media (max-width:799px)": {
      boxShadow: `#0000000f -3px 3px 20px 0px`,
      padding: "2rem",
      borderRadius: "2rem",
    },
    font: "normal normal normal 2.5rem/3rem Lato",
  }),
  openCLogo: {
    height: "auto",
    width: "min(30rem, 50%)",
    transition: "all 1s ease-in-out",
    zIndex: 999,
    position: "sticky",
    display: "flex",
    alignItems: "center",
    top: 10,
    left: "5vw",
    "@media (min-width:1400px)": {
      left: "20vw",
    },
    "@media (max-width:799px)": {
      width: "80%",
    },
  },
  openCLogoHeader: {
    width: "8rem",
    height: "auto",
    //marginLeft: "2rem",
    //marginRight: "auto",
    transition: "all 1s ease-in",
    position: "fixed",
    left: "5vw",
    display: "flex",
    alignItems: "center",
    "@media (min-width:1400px)": {
      left: "20vw",
    },
    top: "1rem",
    "@media (max-width:799px)": {
      width: "6rem",
      top: ".3rem",
    },
    //transform: "translate3d(-150px, 0, 0)",
  },
  circle: {
    width: "30%",
    height: "auto",
    borderRadius: "100%",
    transition: "all 1s ease-in-out",
    // "&:hover": {
    //   transform: "rotate3d(0, 1, 0, 540deg)",
    //   boxShadow: "1px 1px 10px 3px " + theme.palette.secondary.main,
    //   transition: "all 0.7s ease-in",
    // },
  },
  circleClicked: {
    transform: "rotate3d(0, 1, 0, 720deg)",
    boxShadow: "1px 1px 10px 3px " + theme.palette.secondary.main,
    transition: "all 1s ease-in-out",
  },
  logoText: { width: "65%", height: "auto" },
  logoPlaceHolder: {
    height: "5rem",
  },
  content: {
    opacity: 0.75,
    marginTop: "1rem",
    "@media (max-width:1400px)": {
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
  },
  subtitle: {
    opacity: 1,
    marginTop: "2rem",
    "@media (max-width:1400px)": {
      fontSize: "2rem",
      lineHeight: "2.25rem",
    },
  },
  "@keyframes dancing-arrow": {
    "0%": {
      marginTop: "2rem",
    },
    "33%": {
      marginTop: "4rem",
    },
    "100%": {
      marginTop: "2rem",
    },
  },
  down: {
    maxHeight: "3rem",
    width: "auto",
    cursor: "pointer",
    marginTop: "2rem",
    position: "absolute",
    animationName: "$dancing-arrow",
    animationDuration: "2s",
    animationIterationCount: "infinite",
  },
  scrollDetection: {
    width: 5,
    height: 5,
  },
  movingCircle: {
    width: "1vmin",
    height: "1vmin",
    borderRadius: "1vmin",
    backfaceVisibility: "hidden",
    position: "absolute",
    animation: "move",
    animationDuration: "39s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    opacity: 0.8,
  },
}));

export default MainPage;
