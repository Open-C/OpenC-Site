import React from "react";
import Layout from "../Layout";
import logo from "../../Assets/centro-logo-full.png";
import mockups from "../../Assets/centro-mockups.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mockup: {
    height: "36.25rem",
    width: "34.375rem",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  centroLogo: {
    height: "13.125rem",
    width: "37.75rem",
  },
  content: {
    font: "normal normal normal 35px/42px Lato",
    color: "#FFFFFF",
    opacity: 0.75,
  },
}));
