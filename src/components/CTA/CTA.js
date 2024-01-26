import React from "react";
import classes from "./CTA.module.scss";
import Button from "../Button/Button";
import Text from "../Text/Text";
import H2 from '../H2/H2'
import LogoGoogle from "../../images/logo-google.png";
import LogoIBM from "../../images/logo-ibm.png";
import LogoMicrosoft from "../../images/logo-microsoft.png";
import LogoHP from "../../images/logo-hp.png";
import LogoVector from "../../images/logo-vector-graphics.png";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <div className={classes.cta__partners}>
        <img src={LogoGoogle} alt="Logo Google" className={classes.cta__img} />
        <img src={LogoIBM} alt="Logo IBM" className={classes.cta__img} />
        <img
          src={LogoMicrosoft}
          alt="Logo Microsoft"
          className={classes.cta__img}
        />
        <img
          src={LogoHP}
          alt="Logo Hewlett Packard"
          className={classes.cta__img}
        />
        <img
          src={LogoVector}
          alt="Logo Vector Graphics"
          className={classes.cta__img}
        />
      </div>
      <div className={classes.cta__action}>
        <H2 className={classes.cta__heading}>
          A history of everything you copy
        </H2>
        <Text>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Text>
        <div className={classes.cta__row}>
          <Button>Download for iOS</Button>
          <Button accent={true}>Download for Mac</Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
