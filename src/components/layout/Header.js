import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const loginStatus = useSelector((state) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(loginStatus.isLogin);
    }
  }, [loginStatus.isLogin]);

  const showNavigationHandler = (e) => {
    setIsBurgerActive(!isBurgerActive);
  };

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      navigate('../movies', {replace: true});
      window.location.reload();
    }
  };

  let content = isLogin ? (
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
  ) : (
    <Fragment>
      <li>{!loginStatus.isLogin && <NavLink to="/login">Login</NavLink>}</li>
      <li>
        {!loginStatus.isLogin && <NavLink to="/registration">Register</NavLink>}
      </li>
    </Fragment>
  );
  return (
    <nav className={classes.topnav}>
      <NavLink to="/movies" className={classes.title}>
        Movies App
      </NavLink>
      <button
        className={`${classes.burger} ${isBurgerActive ? classes.active : ""}`}
        onClick={showNavigationHandler}
      >
        <div className={classes["line-1"]}></div>
        <div className={classes["line-2"]}></div>
        <div className={classes["line-3"]}></div>
      </button>
      <div
        className={`${classes.navigation} ${
          isBurgerActive ? classes.show : ""
        }`}
      >
        <div>
          <ul>{content}</ul>
        </div>
        {isLogin && (
          <button className={classes.logout} onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
