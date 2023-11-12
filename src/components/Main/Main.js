import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import classes from "./Main.module.css";
import StatusBar from "./StatusBar";
import { MenuContext } from "../../contexts/Menu";
const Main = () => {
  const menuctx = useContext(MenuContext);
  const darkMainClasses = classes.main + " " + classes.mainDark;
  const darkNav = classes.nav + " " + classes.navDark;

  return (
    <>
      <div className={menuctx.darkMode ? darkMainClasses : classes.main}>
        {menuctx.menuIsShown && (
          <div className={menuctx.darkMode ? darkNav : classes.nav}>
            <div className={classes.logo}>
              <FontAwesomeIcon icon={faGlobe} /> Global
            </div>
            <hr />
            <Nav />
          </div>
        )}
        <div className={classes.content}>
          <StatusBar />
          <div className={classes.section}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
