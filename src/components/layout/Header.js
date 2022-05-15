import { Fragment } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const loginStatus = useSelector((state) => state.login);
  return (
    <nav className={classes.topnav}>
      <NavLink to="/movies" className={classes.title}>
        Movies App
      </NavLink>
      <nav>
        <ul>
          {loginStatus.isLogin && (
            <Fragment>
              <li>
                <NavLink to="/favorite">Favorite</NavLink>
              </li>
              <li>
                <NavLink to="/top">Top 250</NavLink>
              </li>
              <li>
                <NavLink to="/waiting">Waiting List</NavLink>
              </li>
            </Fragment>
          )}
        </ul>
        <ul className={classes.actions}>
          <li>
            {!loginStatus.isLogin && <NavLink to="/login">Login</NavLink>}
          </li>
          <li>
            {!loginStatus.isLogin && (
              <NavLink to="/registration">Register</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
