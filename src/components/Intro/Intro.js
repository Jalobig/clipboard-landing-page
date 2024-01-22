import React from "react";
import classes from "./Intro.module.scss";
import Logo from "../../images/logo.svg";
import Button from "../Button/Button";
import Text from "../Text/Text";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <img src={Logo} alt="Logo of clipboard" className={classes.intro__logo} />
      <h1 className={classes.intro__heading}>
        A history of everything you copy
      </h1>
      <Text>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </Text>
      <div className={classes.intro__row}>
        <Button>Download for iOS</Button>
        <Button accent={true}>Download for Mac</Button>
      </div>
    </div>
  );
};

export default Intro;
