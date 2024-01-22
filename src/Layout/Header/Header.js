import React from "react";
import classes from "./Header.module.scss";
import BGHeaderDesktop from "../../images/bg-header-desktop.png";
import Intro from "../../components/Intro/Intro";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src={BGHeaderDesktop}
        alt="Background header"
        className={classes.header__bg}
      />
      <Intro />
    </header>
  );
};

export default Header;
