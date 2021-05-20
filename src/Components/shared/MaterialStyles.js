import { makeStyles } from "@material-ui/core";

export const enrollBtn = (props) => ({
  background: `${props.buttonBackground} 0% 0% no-repeat padding-box`,
  boxShadow: "0px 3px 2px #2700FF29",
  borderRadius: "2rem",
  opacity: 1,
  height: "3rem",
  width: "fit-content",
  minWidth: "10rem",
  color: `${props.buttonColor}`,
  font: "normal normal normal 1.25rem/1.5rem Lato",
  textTransform: "none",
  marginTop: "2rem",
  padding: "2rem",
  transition: "all 0.5s ease-in-out",

  "&:hover": {
    transition: "all 0.75s ease-in-out",
    ...props.hoverProps,
  },
  "@media (max-width:1260px)": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    height: "2.5rem",
    minWidth: "none",
    width: "fit-content", //`${(18.75 / 5.625) * 4}rem`,
    borderRadius: "2rem",
    padding: "1.5rem",
  },
});

export const SlideIn = makeStyles((theme) => ({
  right: {
    animation: "2s cubic-bezier(1,-0.55, 0, 2.37) 0s 1 $slideInFromRight",
  },
  left: {
    animation: "1s ease-in 0s 1 $slideInFromLeft",
  },
  center: {
    animation: "1s ease-out 0s 1 $slideUp",
  },
  spin: {
    "&:hover": {
      animation: "1s ease-out 0s 1 $spin",
    },
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate3d(0, 1, 0, 0deg)",
    },
    "100%": {
      transform: "rotate3d(0, 1, 0, 540deg)",
    },
  },
  "@keyframes slideInFromRight": {
    "0%": {
      transform:
        "translateX(-300%) translateY(-300%) rotate3d(0, 1, 0, 180deg)",
    },
    // "50%": {
    //   transform: "translateX(-50%) translateY(-50%) rotate3d(0, 1, 0, 90deg)",
    // },
    "100%": {
      transform: "translateX(0) rotate3d(0, 1, 0, 0)",
    },
  },
  "@keyframes slideUp": {
    "0%": {
      transform: "translateY(100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(100%) translateY(300%) rotate3d(0, 1, 0, -180deg)",
    },
    // "50%": {
    //   transform: "translateX(50%) translateY(150%) rotate3d(0, 1, 0, -90deg)",
    // },

    "100%": {
      transform: "translateX(0) rotate3d(0, 1, 0, 0)",
    },
  },
}));
