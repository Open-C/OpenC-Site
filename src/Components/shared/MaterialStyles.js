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
