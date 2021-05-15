export const enrollBtn = (props) => ({
  background: `${props.buttonBackground} 0% 0% no-repeat padding-box`,
  boxShadow: "0px 3px 2px #2700FF29",
  borderRadius: "2rem",
  opacity: 1,
  height: "5.625rem",
  width: "18.75rem",
  color: `${props.buttonColor}`,
  font: "normal normal normal 2rem/2.25rem Lato",
  textTransform: "none",
  marginTop: "2rem",
  "@media (min-width:800px) and (max-width:1260px)": {
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    height: "4rem",
    width: `${(18.75 / 5.625) * 4}rem`,
    borderRadius: `${(2 / 5.625) * 4}rem`,
  },
});
