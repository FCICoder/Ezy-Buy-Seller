import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <ul className={classes.links}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
            end
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faHome} />
            </div>
            <h1>Dashboard</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/profile"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faUserAlt} />
            </div>
            <h1>Profile</h1>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/Orders"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faBoxOpen} />
            </div>
            <h1>Orders</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/products"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faShop} />
            </div>
            <h1>Products</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/Clients"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faUsers} />
            </div>
            <h1>Clients</h1>
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/planner"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faCalendar} />
            </div>
            <h1>Planner</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/Profits"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faSackDollar} />
            </div>
            <h1>Profits</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/Settings"
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={icon.faGear} />
            </div>
            <h1>Settings</h1>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
