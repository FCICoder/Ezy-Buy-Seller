import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import { Form } from "react-router-dom";
import classes from "./FormData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { MenuContext } from "../../contexts/Menu";
const FormData = () => {
  const menuCtx = useContext(MenuContext)
  const [name, setName] = useState("Hossam Mohamed");
  const [email, setEmail] = useState("Hossam_Mohamed@gmail.com");
  const [address, setAddress] = useState("Egypt - Sohag - Akhmim");
  const [website, setWebsite] = useState("www.HossamDev.com");
  const [money, setMoney] = useState(250);
  const [facebook, setFb] = useState("facebook/hossam.com");
  const [twitter, setTw] = useState("twitter/hossam.com");
  const [pinterst, setP] = useState("pinterest/hossam.com");
  const [github, setGet] = useState("github/hossam.com");
  const [linkedin, setlinked] = useState("linkedin/hossam.com");
  const darkClasses = classes.form + ' ' + classes.formDark
  return (
    <Card>
      <Form className={menuCtx.darkMode ? darkClasses : classes.form}>
        <div className={classes.data}>
          <h1 className={classes.text}>Basic Information</h1>
          <div className={classes.field}>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="address"> Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder={address}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="website"> Website</label>
            <input
              type="text"
              name="website"
              id="website"
              placeholder={website}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="money"> Withdrawal Threshold $</label>
            <input
              type="number"
              min="100"
              max="1000"
              name="money"
              id="money"
              placeholder={money}
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.data}>
          <h1 className={classes.text}>Social Links</h1>

          <div className={classes.field}>
            <label htmlFor="facebook">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" />{" "}
              Facebook
            </label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              placeholder={facebook}
              value={facebook}
              onChange={(e) => setFb(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1d9bf0" />{" "}
              Twitter
            </label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              placeholder={twitter}
              value={twitter}
              onChange={(e) => setTw(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="pinterst">
              <FontAwesomeIcon icon={faPinterest} size="lg" color="#c51f27" />{" "}
              pinterst
            </label>
            <input
              type="text"
              name="pinterst"
              id="pinterst"
              placeholder={pinterst}
              value={pinterst}
              onChange={(e) => setP(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="github">
              <FontAwesomeIcon icon={faGithub} size="lg" color="#183153" />{" "}
              github
            </label>
            <input
              type="text"
              name="github"
              id="github"
              placeholder={github}
              value={github}
              onChange={(e) => setGet(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <label htmlFor="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0a66c2" />{" "}
              linkedin
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder={linkedin}
              value={linkedin}
              onChange={(e) => setlinked(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.btns}>
          <button type="submit">Save Changes</button>
          <button>Reset</button>
        </div>
      </Form>
    </Card>
  );
};

export default FormData;
