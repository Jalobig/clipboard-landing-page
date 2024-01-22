import React from "react";
import classes from "./Features.module.scss";
import H2 from "../H2/H2";
import Text from "../Text/Text";
import MacbookDesktop from "../../images/image-computer.png";
import ImgDevices from "../../images/image-devices.png";

const Features = () => {
  return (
    <div className={classes.features}>
      <div className={classes.features__group}>
        <H2>Keep track of your snippets</H2>
        <Text>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </Text>
      </div>
      <div className={classes.features__row}>
        <img
          src={MacbookDesktop}
          alt="Macbook"
          className={classes.features__img}
        />
        <div>
          <div className={classes.features__feature}>
            <h3 className={classes.features__title}>Quick Search</h3>
            <p className={classes.features__text}>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className={classes.features__feature}>
            <h3 className={classes.features__title}>Cloud Sync</h3>
            <p className={classes.features__text}>
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className={classes.features__feature}>
            <h3 className={classes.features__title}>Complete History</h3>
            <p className={classes.features__text}>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes.features__group} ${classes.mb__medium}`}>
        <H2>Access Clipboard anywhere</H2>
        <Text>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </Text>
      </div>
      <img src={ImgDevices} alt="Devices" className={classes.features__img2} />
      <div className={`${classes.features__group} ${classes.mb__medium}`}>
        <H2>Supercharge your workflow</H2>
        <Text>We’ve got the tools to boost your productivity.</Text>
      </div>
      
    </div>
  );
};

export default Features;
