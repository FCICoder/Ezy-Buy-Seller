import React, { useState } from "react";
import Card from "../UI/Card";
import avatar from "../../data/avatar.jpg";
import classes from "./UserPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "./PerformanceChart";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const UserPanel = () => {
  const [image, setImage] = useState();
  return (
    <Card>
      <div className={classes.changeImg}>
        <img
          src={image ? URL.createObjectURL(image) : avatar}
          className={classes.img} alt='img'
        />
        <label className={classes.label}>
          <FontAwesomeIcon icon={icon.faCamera} />
          <input
            className={classes.upload}
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            onChange={(file) => setImage(file.target.files[0])}
          />
        </label>
      </div>
      <div>
        <h2 className={classes.name}>Hossam Mohamed</h2>
        <h2 className={classes.title}>w e b D e v e l o p e r</h2>
      </div>
      <hr />
      <div className={classes.chart}>
        <PerformanceChart />
      </div>
      <hr />
      <div className={classes.trophies}>
        <h2>Trophies</h2>
        <div className={classes.icons}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faWandMagicSparkles}
          />
          <FontAwesomeIcon className={classes.icon} icon={icon.faBroomBall} />
          <FontAwesomeIcon className={classes.icon} icon={icon.faDragon} />
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faHandshakeSimple}
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faHandHoldingDollar}
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faHandsAslInterpreting}
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faGraduationCap}
          />
          <FontAwesomeIcon className={classes.icon} icon={icon.faLightbulb} />
          <FontAwesomeIcon className={classes.icon} icon={icon.faFeather} />
          <FontAwesomeIcon className={classes.icon} icon={icon.faBolt} />
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.faClockRotateLeft}
          />
        </div>
      </div>
      <hr />
      <div className={classes.social}>
        <div className={classes.stats}>
          <div
            className={classes.square}
            style={{ backgroundColor: "#1877f2" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="2xl" color="white" />
            <h1> 350k Followers</h1>
          </div>
        </div>
        <div className={classes.stats}>
          <div
            className={classes.square}
            style={{
              background:
                "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" color="white" />
            <h1> 210k Followers</h1>
          </div>
        </div>
        <div className={classes.stats}>
          <div
            className={classes.square}
            style={{ backgroundColor: "#1d9bf0" }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2xl" color="white" />
            <h1> 120k Followers</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserPanel;
