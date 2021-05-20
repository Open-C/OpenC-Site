import React, { useState, forwardRef } from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import { enrollBtn } from "../shared/MaterialStyles";
import Layout from "../Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "min(50rem, 90%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "5rem",
  },
  button: enrollBtn,
  input: {
    marginTop: "min(1rem, 2.5%)",
    color: "#FFFFFF",
    opacity: 0.85,
  },
  title: {
    color: "#FFFFFF",
    opacity: 0.85,
  },
}));

const ContactUs = forwardRef((props, ref) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const classes = useStyles({ buttonBackground: "#6153FF" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const submitForm = () =>
    setFields({
      name: "",
      email: "",
      message: "",
    });
  const form = (
    <div className={classes.root} ref={ref}>
      <Typography variant="h1" className={classes.title}>
        Contact Us
      </Typography>
      <TextField
        name="name"
        value={fields.name}
        label="Name"
        variant="filled"
        onChange={handleChange}
        color="secondary"
        fullWidth
        className={classes.input}
        InputLabelProps={{
          className: classes.input,
          color: "secondary",
        }}
        FormHelperTextProps={{ color: "secondary" }}
        InputProps={{
          className: classes.input,
          color: "secondary",
        }}
      />
      <TextField
        name="email"
        value={fields.email}
        label="Email"
        variant="filled"
        onChange={handleChange}
        fullWidth
        className={classes.input}
        InputLabelProps={{
          className: classes.input,
          color: "secondary",
        }}
        FormHelperTextProps={{ color: "secondary" }}
        InputProps={{
          className: classes.input,
          color: "secondary",
        }}
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
        InputLabelProps={{
          className: classes.input,
          color: "secondary",
        }}
        FormHelperTextProps={{ color: "secondary" }}
        InputProps={{
          className: classes.input,
          color: "secondary",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={submitForm}
      >
        Submit
      </Button>
    </div>
  );

  return <Layout background="#5849FD">{form}</Layout>;
});

export default ContactUs;
