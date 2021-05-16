import React, { useState } from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";
import Layout from "../Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "min(50rem, 90%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: enrollBtn,
  input: {
    marginTop: "1rem",
    color: "#FFFFFF",
    opacity: 0.85,
    borderRadius: "10%",
  },
  title: {
    color: "#FFFFFF",
    opacity: 0.85,
  },
}));

const ContactUs = (props) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const form = (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Contact Us
      </Typography>
      <TextField
        name="name"
        value={fields.name}
        label="Name"
        variant="filled"
        onChange={handleChange}
        fullWidth
        className={classes.input}
        InputLabelProps={{ color: "secondary" }}
        FormHelperTextProps={{ color: "secondary" }}
      />
      <TextField
        name="email"
        value={fields.email}
        label="Email"
        variant="filled"
        onChange={handleChange}
        fullWidth
        className={classes.input}
        InputLabelProps={{ color: "secondary" }}
      />
      <TextField
        name="message"
        value={fields.message}
        label="Message"
        variant="filled"
        multiline
        rows={5}
        onChange={handleChange}
        fullWidth
        className={classes.input}
        InputLabelProps={{ color: "secondary" }}
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </div>
  );

  return <Layout background="#5849FD">{form}</Layout>;
};

export default ContactUs;
