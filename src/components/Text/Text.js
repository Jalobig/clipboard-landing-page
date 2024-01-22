import React from "react";
import classes from "./Text.module.scss";
const Text = (props) => {
  return <p className={classes.text}>{props.children}</p>;
};

export default Text;
