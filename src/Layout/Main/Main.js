import React from "react";
import classes from "./Main.module.scss";
import Features from "../../components/Features/Features";
import CTA from "../../components/CTA/CTA";

const Main = () => {
  return (
    <main className={classes.main}>
      <Features />
      <CTA />
    </main>
  );
};

export default Main;
