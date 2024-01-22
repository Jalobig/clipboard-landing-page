import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <div
      className={`${classes.button} ${
        props.accent ? classes.button__accent : classes.button__primary
      }`}
    >
      {props.children}
    </div>
  );
};

export default Button;
