import React from "react";
import avatar from "../../data/avatar.jpg";
import classes from "./Welcome.module.css";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
const Welcome = () => {
  return (
    <Card>
      <div className={classes.info}>
        <div className={classes.text}>
          <h2>Welcome Back </h2>
          <h3>Hossam </h3>
        </div>
        <img src={avatar} />
      </div>
      <hr />
      <div className={classes.data}>
        <div className={classes.stat}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={icon.faBoxOpen} size="xl" color="orange" />
          </div>
          <h1>231</h1>
          <p>Products</p>
        </div>
        <div className={classes.stat}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={icon.faUsers} size="xl" color="blue" />
          </div>
          <h1>433</h1>
          <p>Clients</p>
        </div>
        <div className={classes.stat}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={icon.faSackDollar} size="xl" color="green" />
          </div>
          <h1>2560$</h1>
          <p>Profits</p>
        </div>
      </div>
    </Card>
  );
};

export default Welcome;
